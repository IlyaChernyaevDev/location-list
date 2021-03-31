import React, { useState } from 'react';
import { LocationForm } from '../LocationForm';
import { storeLocationsList } from '../../store';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';

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
    </>
  );
});
