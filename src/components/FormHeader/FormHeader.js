import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faVial } from '@fortawesome/free-solid-svg-icons';

import './FormHeader.css';

export const FormHeader = ({ count, storeLocation, index }) => {
  return (
    <header className='form__header'>
      <h2 className='form__title'>
        <FontAwesomeIcon icon={faVial} />
        Тестовая локация {count}
      </h2>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className={'form__btn form__btn-trash'}
        type='button'
        onClick={(event) => {
          storeLocation.removeLocation(index, event);
        }}
      />
    </header>
  );
};
