import React, { useContext, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { storeContext } from '../../store';
import { FormSelect } from '../FormSelect';
import { FormHeader } from '../FormHeader';
import { FormServers } from '../FormServers';
import { FormHint } from '../FormHint';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './LocationForm.css';

export const LocationForm = observer(function LocationForm({
  storeLocation,
  formID,
  count,
  index,
}) {
  const store = useContext(storeContext);

  useEffect(() => {
    store.fetchData();
    if (store.servers.length >= 1) {
      storeLocation.updateServers(
        store.servers,
        index,
        storeLocation.storeLocationsList[index].locationID,
        storeLocation.storeLocationsList[index].envID
      );
    }
  }, [
    store,
    storeLocation.storeLocationsList,
    storeLocation.storeLocationsList[index].locationID,
    storeLocation.storeLocationsList[index].envID,
    index,
    storeLocation
  ]);

  if (!store.isLoaded) {
    return <FontAwesomeIcon icon={faSpinner} />;
  }
  return (
    <form
      className={`form ${storeLocation.storeLocationsList[index].formClassName}`}
      onClick={() => {
        storeLocation.activateForm(index);
      }}
    >
      <FormHeader count={count} storeLocation={storeLocation} index={index} />
      <div className='form__content'>
        <FormSelect
          selectorName={'Локация'}
          storeLocation={storeLocation}
          propertyName={'locationID'}
          formID={formID}
          storeMain={store.locations}
          index={index}
        />
        <FormSelect
          selectorName={'Среда'}
          storeLocation={storeLocation}
          propertyName={'envID'}
          formID={formID}
          storeMain={store.envs}
          index={index}
        />
        <FormServers
          storeMain={store}
          storeLocation={storeLocation}
          index={index}
          locationID={storeLocation.storeLocationsList[index].locationID}
          envID={storeLocation.storeLocationsList[index].envID}
        />
      </div>
      {/* <label className='form__hint'>
        Подсказка
        <FontAwesomeIcon icon={faQuestion} />
        <input
          placeholder='Комментарий по локации'
          value={storeLocation.storeLocationsList[index].hint}
          type='text'
          onChange={(event) =>
            storeLocation.inputHandler('hint', event.target.value, formID)
          }
        ></input>
      </label> */}
      <FormHint storeLocation={storeLocation} index={index} formID={formID} />
    </form>
  );
});
