import React from 'react';

import Table from './Table/Table.js';
import Form from './Form/Form.js';
import Archive from './Archive/Archive.js';


const BodyLayout = (props) => {
   return (
      <div className="App" style={{backgroundColor: "#d7dbe2", padding:"5%"}}>
        <div className="container.fluid">
          <div className="row">
            <Table latestCurrencyData={props.latestCurrencyData} />
            <Form latestCurrencyData={props.latestCurrencyData} onSubmit={props.onSubmit} />
            {props.archivedCurrencyData.length > 0 ? <Archive archivedCurrencyData={props.archivedCurrencyData} /> : undefined}
            
          </div>
        </div>
      </div>
    );
}

export default BodyLayout;

