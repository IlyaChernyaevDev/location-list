import React, {useState, useContext} from 'react';

import { observer } from 'mobx-react-lite';
import { storeContext } from '../../store';

export const LocationForm = observer(function LocationForm({
  setLocationForm,
}) {
  const store = useContext(storeContext);
  const [isActive, setIsActive] = useState(false);
  const [formClassName, setFormClassName] = useState('form');
  const [location, setLocation] = useState({});
  store.fetchData();
  if (!store.isLoaded) {
    return <div>Данные не загружены</div>;
  }

  return (
    <form
      className={formClassName}
      onClick={(event) => {
        if (event.currentTarget) {
          if (!isActive) {
            setFormClassName('form_active');
            setIsActive(true);
          } else {
            setFormClassName('form');
            setIsActive(false);
          }
        }
      }}
    >
      <header className='form__header'>
        <h2>Тестовая локация</h2>
        <button type='button' onClick={() => console.log('remove card')}>Delete</button>
      </header>
      <label className='form__input'>
        Локация
        <select>
          {store.locations.map(({ name, locationID }) => {
            return (
              <option
                value={locationID}
                onChange={(event) => console.log(event.target.value)}
              >
                {name}
              </option>
            );
          })}
        </select>
      </label>
      <label>
        Среда
        <select>
          {store.envs.map(({ name, envID }) => {
            return (
              <option value={envID}>
                {name}
              </option>
            );
          })}
        </select>
      </label>
      <div>
        <p>Серверы</p>
        <p>{store.servers.filter(({ name }) => {

        })}</p>
      </div>
      <label>
        Подсказка
        <input type='text'></input>
      </label>
    </form>
  );
});
