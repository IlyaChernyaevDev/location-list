import React, { useContext, useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { storeContext } from '../../store';
import { FormSelect } from '../FormSelect';
import { FormHeader } from '../HeaderForm';
import { FormServers } from '../FormServers';

export const LocationForm = observer(function LocationForm({
  storeLocation,
  formID,
  count,
  index,
}) {
  const store = useContext(storeContext);

  useEffect(() => {
    store.fetchData();
    if (store.servers.length >= 1) {
      storeLocation.updateServers(
        store.servers,
        index,
        storeLocation.storeLocationsList[index].locationID,
        storeLocation.storeLocationsList[index].envID
      );
    }
  }, [
    store,
    storeLocation.storeLocationsList,
    storeLocation.storeLocationsList[index].locationID,
    storeLocation.storeLocationsList[index].envID,
  ]);

  if (!store.isLoaded) {
    return <div>Данные не загружены</div>;
  }
  return (
    <form
      className={storeLocation.storeLocationsList[index].formClassName}
      onClick={() => {
        storeLocation.activateForm(index);
      }}
    >
      <FormHeader count={count} storeLocation={storeLocation} index={index} />
      <FormSelect
        selectorName={'Локация'}
        storeLocation={storeLocation}
        propertyName={'locationID'}
        formID={formID}
        storeMain={store.locations}
        index={index}
      />
      <FormSelect
        selectorName={'Среда'}
        storeLocation={storeLocation}
        propertyName={'envID'}
        formID={formID}
        storeMain={store.envs}
        index={index}
      />
      <FormServers
        storeMain={store}
        storeLocation={storeLocation}
        index={index}
        locationID={storeLocation.storeLocationsList[index].locationID}
        envID={storeLocation.storeLocationsList[index].envID}
      />
      <label>
        Подсказка
        <input
          value={storeLocation.storeLocationsList[index].hint}
          type='text'
          onChange={(event) =>
            storeLocation.inputHandler('hint', event.target.value, formID)
          }
        ></input>
      </label>
    </form>
  );
});
