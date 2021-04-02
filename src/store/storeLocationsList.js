import { makeAutoObservable, toJS } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export function storeLocationsList() {
  return makeAutoObservable({
    storeLocationsList: [
      {
        formID: uuidv4(),
        locationID: 1,
        envID: 1,
        hint: '',
        servers: [
          {
            serverID: 41,
            name: 'MPTEST41',
            locationID: 1,
            envID: 1,
          },
          {
            serverID: 42,
            name: 'MPTEST42',
            locationID: 1,
            envID: 1,
          },
        ],
        isActive: false,
        formClassName: 'form_deactivated',
      },
    ],

    activateForm(index) {
      if (!this.storeLocationsList[index].isActive) {
        this.storeLocationsList[index].formClassName = 'form_active';
        this.storeLocationsList[index].isActive = true;
      } else {
        this.storeLocationsList[index].formClassName = 'form_deactivated';
        this.storeLocationsList[index].isActive = false;
      }
    },

    updateServers(serversArray, index, locationID, envID) {
      if (serversArray.length >= 1) {
        this.storeLocationsList[index].servers = serversArray.filter(
          (server) => server.locationID === locationID && server.envID === envID
        );
      }
    },

    addNewLocation(event) {
      event.preventDefault();
      this.storeLocationsList.push({
        formID: uuidv4(),
        locationID: 1,
        envID: 1,
        hint: '',
        servers: [
          {
            serverID: 41,
            name: 'MPTEST41',
            locationID: 1,
            envID: 1,
          },
          {
            serverID: 42,
            name: 'MPTEST42',
            locationID: 1,
            envID: 1,
          },
        ],
        isActive: false,
        formClassName: 'form_deactivated',
      });
    },

    inputHandler(propertyName, value, id) {
      this.storeLocationsList.forEach((location) => {
        if (location.formID === id) {
          location[propertyName] = value;
        }
      });
    },

    removeLocation(index, event) {
      event.stopPropagation();
      this.storeLocationsList.splice(index, 1);
    },

    loggingStore(event) {
      event.preventDefault();
      let array = this.storeLocationsList.filter(({ isActive }) => isActive);
      array = array.map(({ locationID, envID, hint }) => {
        return { locationID, envID, hint };
      });
      console.log(toJS(array));
    },
  });
}
