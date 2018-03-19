import React from 'react';

import '../style.css';

const DropdownCurrencySelector = (props) =>{
    
    return (
        <select ref ={props.setRef} id="dropdown">
            {props.latestCurrencyData.map( item => {
                return <option value={item.code} key={item.code} {...item}>{item.currency}</option>;
                
            })}
        </select>
        
    );
}

export default DropdownCurrencySelector;

