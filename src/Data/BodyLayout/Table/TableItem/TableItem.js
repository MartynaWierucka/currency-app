import React from 'react';


const TableItem = (props) =>{
    return (
        <tr>
            <td>{props.latestCurrencyData.code}</td>
            <td>{props.latestCurrencyData.currency}</td>
            <td>{props.latestCurrencyData.bid}</td>
            <td>{props.latestCurrencyData.ask}</td>  
        </tr>

    );
}

export default TableItem;

