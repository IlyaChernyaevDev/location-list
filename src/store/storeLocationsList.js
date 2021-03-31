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
        servers: null,
        isActive: false,
        formClassName: 'form',
      },
    ],

    isCorrectServer(server) {
      return (
        storeLocationsList.locationID === server.locationID &&
        storeLocationsList.envID === server.envID
      );
    },

    activateForm(index) {
      if (!this.storeLocationsList[index].isActive) {
        this.storeLocationsList[index].formClassName = 'form_active';
        this.storeLocationsList[index].isActive = true;
      } else {
        this.storeLocationsList[index].formClassName = 'form';
        this.storeLocationsList[index].isActive = false;
      }
    },

    filterServersArray(serversArray, formID) {
      const form = this.storeLocationsList.filter(
        (location) => location.formID === formID
      )[0];
      // console.log(toJS(form));
      form.servers = serversArray.filter(this.isCorrectServer);
      // this.storeLocationsList.forEach((location) => {
      //   if(location.formID === formID) {
      //     location.servers = form.servers;
      //   }
      // })
      return form.servers.map(({ name }) => `${name} `);
    },

    updateServers(serversArray, formID) {
      let string = this.filterServersArray(serversArray, formID);
      return `string`;
    },

    addNewLocation(event) {
      event.preventDefault();
      this.storeLocationsList.push({
        formID: uuidv4(),
        locationID: 1,
        envID: 1,
        hint: '',
        servers: null,
        isActive: false,
        formClassName: 'form',
      });
    },

    inputHandler(propertyName, value, id) {
      this.storeLocationsList.forEach((location) => {
        if (location.formID === id) {
          location[propertyName] = value;
        }
      });
    },

    loggingStore(event) {
      event.preventDefault();
      console.log(toJS(this.storeLocationsList));
    },
  });
}
