import React, { useContext, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { storeContext } from './store';

export default function App() {
  return (
    <div className='App'>
      <LocationsList />
    </div>
  );
}

const LocationForm = observer(function LocationForm() {
  const store = useContext(storeContext);
  store.fetchData();
  if (!store.isLoaded) {
    return <div>Данные не загружены</div>;
  }
  return <form><label></label></form>;
});

const LocationsList = () => {
  const [locationsList, setLocationsList] = useState([{}]);
  return (
    <>
      {locationsList.map((location, index) => (
        <LocationForm key={`location-${index}`} />
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
