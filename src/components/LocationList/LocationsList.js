import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';

import { storeLocationsList } from '../../store';
import { LocationForm } from '../LocationForm';

import './LocationList.css';

const storeLocation = storeLocationsList();

export const LocationsList = observer(function LocationsList() {
  return (
    <>
      {storeLocation.storeLocationsList.map((location, index) => (
        <LocationForm
          key={uuidv4()}
          formID={location.formID}
          storeLocation={storeLocation}
          index={index}
          count={++index}
        />
      ))}
      <div className={'list__buttons'}>
        <button
          onClick={(event) => {
            storeLocation.addNewLocation(event);
          }}
        >
          Добавить тестовую локацию
        </button>
        <button
          onClick={(event) => {
            storeLocation.loggingStore(event);
          }}
        >
          Вывести результат в консоль
        </button>
      </div>
    </>
  );
});
