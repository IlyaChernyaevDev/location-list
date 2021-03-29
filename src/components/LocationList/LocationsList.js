import React, { useState } from 'react';
import { LocationForm } from '../LocationForm';

export const LocationsList = () => {
  const [locationsList, setLocationsList] = useState([{}]);
  return (
    <>
      {locationsList.map((location, index) => (
        <LocationForm
          key={`location-${index}`}
          setLocationsList={setLocationsList}
        />
      ))}
      <button
        onClick={() => {
          setLocationsList([...locationsList, {}]);
        }}
      >
        Добавить тестовую локацию
      </button>
      <button
        onClick={() => {
          console.log(locationsList);
        }}
      >
        Вывести результат в консоль
      </button>
    </>
  );
};
