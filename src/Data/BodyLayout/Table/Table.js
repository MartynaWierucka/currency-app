import React from 'react';
import TableItem from './TableItem/TableItem.js';
import Clock from './Clock.js';

import '../style.css';


const Table = (props) => {
    return (
      <div className="Table col-sm-8" id="container">
        <div className="row">
          <div className="col-sm-10">
            <h1 id="title">Tabela kupna i sprzedaży</h1>
          </div>
          <div className="col-sm-2">
            <Clock />
          </div>
        </div>
            <table className ="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Kod waluty</th>
                    <th scope="col">Waluta</th>
                    <th scope="col">Kupno</th>
                    <th scope="col">Sprzedaż</th>
                    </tr>
                </thead>
                
                <tbody>
                  {props.latestCurrencyData.map( item => <TableItem latestCurrencyData={item} key={item.code} {...item} />)}
                </tbody>
            </table>
      </div>
    );
}

export default Table;
