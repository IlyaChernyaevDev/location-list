import { v4 as uuidv4 } from 'uuid';

export const FormSelect = ({
  selectorName,
  storeLocation,
  propertyName,
  formID,
  storeMain,
  index,
}) => {
  return (
    <label className='form__input'>
      {selectorName}
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
