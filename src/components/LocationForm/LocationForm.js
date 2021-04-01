import React, { useState, useContext, useEffect } from 'react';

import { Observer, observer } from 'mobx-react-lite';
import { storeContext } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { selectComponent } from '../selectComponent/selectComponent';
import { runInAction } from 'mobx';

export const LocationForm = observer(function LocationForm({
  storeLocation,
  formID,
  count,
  index,
}) {
  const store = useContext(storeContext);

  useEffect(() => {
    store.fetchData();
    runInAction(() => {
      storeLocation.updateServers(
        store.servers,
        index,
        storeLocation.storeLocationsList[index].locationID,
        storeLocation.storeLocationsList[index].envID
      );
    });
  }, [
    store,
    storeLocation.storeLocationsList[index].locationID,
    storeLocation.storeLocationsList[index].envID,
  ]);

  if (!store.isLoaded) {
    return <div>Данные не загружены</div>;
  }

  return (
    <form
      className={storeLocation.storeLocationsList[index].formClassName}
      onClick={() => {
        storeLocation.activateForm(index);
      }}
    >
      <header className='form__header'>
        <h2>Тестовая локация {count}</h2>
        <button
          type='button'
          onClick={(event) => {
            storeLocation.removeLocation(index, event);
          }}
        >
          Delete
        </button>
      </header>
      <label className='form__input'>
        Локация
        <select
          value={storeLocation.storeLocationsList[index].locationID}
          onChange={(event) =>
            storeLocation.inputHandler(
              'locationID',
              +event.target.value,
              formID
            )
          }
        >
          {store.locations.map(({ name, locationID }) => {
            return (
              <option value={locationID} key={uuidv4()}>
                {name}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Среда
        <select
          value={storeLocation.storeLocationsList[index].envID}
          onChange={(event) =>
            storeLocation.inputHandler('envID', +event.target.value, formID)
          }
        >
          {store.envs.map(({ name, envID }) => {
            return (
              <option value={envID} key={uuidv4()}>
                {name}
              </option>
            );
          })}
        </select>
      </label>
      <div>
        <p>Серверы</p>
        <p>
          {storeLocation.storeLocationsList[index].servers.map(
            ({ name }) => `${name}`
          )}
        </p>
      </div>
      <label>
        Подсказка
        <input
          value={storeLocation.storeLocationsList[index].hint}
          type='text'
          onChange={(event) =>
            storeLocation.inputHandler('hint', event.target.value, formID)
          }
        ></input>
      </label>
    </form>
  );
});
