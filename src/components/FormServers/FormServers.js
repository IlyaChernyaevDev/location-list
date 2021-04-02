import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

import './FormServers.css';

export const FormServers = function FormServers({ storeLocation, index }) {
  return (
    <div className='form__servers'>
      <p>Серверы</p>
      <p>
        <FontAwesomeIcon icon={faServer} />
        {storeLocation.storeLocationsList[index].servers.length >= 1
          ? storeLocation.storeLocationsList[index].servers
              .map(({ name }) => `${name}`)
              .toString()
              .trim()
              .replace(/,/g, ', ') + '.'
          : 'Серверов нет'}
      </p>
    </div>
  );
};
