import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLeaf } from '@fortawesome/free-solid-svg-icons';

import './FormSelect.css';

export const FormSelect = ({
  selectorName,
  storeLocation,
  propertyName,
  formID,
  storeMain,
  index,
}) => {
  return (
    <label className='form__select'>
      {selectorName}
      {selectorName === 'Локация' ? (
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className={'form__select-icon form__select-icon_location'}
        />
      ) : (
        <FontAwesomeIcon
          icon={faLeaf}
          className={'form__select-icon form__select-icon_ip-address'}
        />
      )}

      <select
        value={
          propertyName === 'locationID'
            ? storeLocation.storeLocationsList[index].locationID
            : storeLocation.storeLocationsList[index].envID
        }
        onChange={(event) =>
          storeLocation.inputHandler(propertyName, +event.target.value, formID)
        }
      >
        {propertyName === 'locationID'
          ? storeMain.map(({ name, locationID }) => {
              return (
                <option value={locationID} key={uuidv4()}>
                  {name}
                </option>
              );
            })
          : storeMain.map(({ name, envID }) => {
              return (
                <option value={envID} key={uuidv4()}>
                  {name}
                </option>
              );
            })}
      </select>
    </label>
  );
};
