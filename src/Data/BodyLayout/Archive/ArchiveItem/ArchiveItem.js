import React from 'react';


const ArchiveItem = (props) =>{
    return ( 
        <tr>
            <td>{props.archivedCurrencyData.effectiveDate}</td> 
            <td>{props.archivedCurrencyData.bid}</td>
            <td>{props.archivedCurrencyData.ask}</td> 
        </tr>
    )
}

export default ArchiveItem;

