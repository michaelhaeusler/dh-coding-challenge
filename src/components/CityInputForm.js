import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/CityInputForm.css';

function CityInputForm({ buttonText='Get Weather', setCity }) {
  const [inputVal, setInputVal] = useState('');

  function onSubmit(e) {
    e.preventDefault();

    if (inputVal !== '') {
      setCity(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className='city-input-form'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={inputVal}
          placeholder="Enter your city"
          onChange={(e) => {setInputVal(e.target.value)}}
        />
        <button disabled={!inputVal}>{buttonText}</button>
      </form>
    </div>
  );
}


CityInputForm.propTypes = {
  buttonText: PropTypes.string,
  setCity: PropTypes.func.isRequired
}


export default CityInputForm;
