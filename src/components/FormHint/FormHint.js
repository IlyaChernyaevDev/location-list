import { observer } from 'mobx-react-lite';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import './FormHint.css';

export const FormHint = observer(function FormHint({
  storeLocation,
  index,
  formID,
}) {
  return (
    <label className='form__hint'>
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
    </label>
  );
});
