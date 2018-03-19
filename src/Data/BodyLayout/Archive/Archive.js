import React from 'react';
import ArchiveItem from './ArchiveItem/ArchiveItem.js';



const Archive = (props) => {
    return (
      <div className="Table, col-sm-8" id="container">
        <h3 id="title">Dane archiwalne</h3>
            <table className ="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Kupno</th>
                    <th scope="col">Sprzedaż</th>
                    </tr>
                </thead>
                
                <tbody>
                  {props.archivedCurrencyData.map( item => <ArchiveItem archivedCurrencyData={item} key={item.no} {...item}/>)}
                </tbody>
            </table>
      </div>
    );
}

export default Archive;
