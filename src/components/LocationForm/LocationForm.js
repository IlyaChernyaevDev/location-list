import React, { useState, useContext } from 'react';

import { observer } from 'mobx-react-lite';
import { storeContext } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { selectComponent } from '../selectComponent/selectComponent';

export const LocationForm = observer(function LocationForm({
  storeLocation,
  formID,
  count,
  index,
}) {
  const store = useContext(storeContext);

  store.fetchData();

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
          // onClick={() => {
          //   setLocationsList((prevState) => {
          //     const newArray = prevState.filter(
          //       (location) =>
          //         location.formID !== storeForm.storeLocationForm.formID
          //     );
          //     return [...newArray];
          //   });
          // }}
        >
          Delete
        </button>
      </header>
      <label className='form__input'>
        Локация
        <select
          value={storeLocation.storeLocationsList[index].locationID}
          onChange={(event) =>
            storeLocation.inputHandler('locationID', event.target.value, formID)
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
            storeLocation.inputHandler('envID', event.target.value, formID)
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
        {/* <p>{storeLocation.updateServers(store.servers, formID)}</p> */}
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
