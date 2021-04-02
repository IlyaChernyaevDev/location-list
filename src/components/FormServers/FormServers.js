export const FormServers = function FormServers({ storeLocation, index }) {
  return (
    <div>
      <p>Серверы</p>
      <p>
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
