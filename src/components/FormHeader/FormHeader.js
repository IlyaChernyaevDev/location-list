import './FormHeader.css';

export const FormHeader = ({ count, storeLocation, index }) => {
  return (
    <header className='form__header'>
      <h2>Тестовая локация {count}</h2>
      <button
        className={'btn btn-trash'}
        type='button'
        onClick={(event) => {
          storeLocation.removeLocation(index, event);
        }}
      >
        <i className='fal fa-trash-alt'></i>
      </button>
    </header>
  );
};
