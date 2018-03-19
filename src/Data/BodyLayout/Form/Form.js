import React from 'react';
import DropdownCurrencySelector from './DropdownCurrencySelector/DropdownCurrencySelector.js';

import '../style.css';
import './style.css';

const Form = (props) => {
    let recordsInput;
    let currencyInput;
    
    const newAlert = () => {
      props.onSubmit(currencyInput.value, recordsInput.value);
    }

    

    return (
      <div className="Form, col-sm-3" id="container">
          {/* POCZĄTEK FORMULARZA */}
          <h2 id="title">Archiwum waluty</h2>
          
          {/* PIERWSZY DROPDOWN */}
        <div id="dropdownContainer">
          <label htmlFor="dropdown">Wybierz walutę:</label>
          <DropdownCurrencySelector latestCurrencyData = {props.latestCurrencyData} setRef = {(input) => { currencyInput = input; }}/>
        </div>
          
          {/* DRUGI DROPDOWN */}
        <div id="dropdownContainer">  
          <label htmlFor="dropdown">oraz ilość archiwalnych rekordów do wyświetlenia:</label>
          <select ref={(input) => {recordsInput = input;}} id="dropdown">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </div>

          <button onClick={newAlert} type="submit" id="button">Wyświetl</button>
      </div>
    );
}

export default Form;

