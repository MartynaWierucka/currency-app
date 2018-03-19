import React, { Component } from 'react';
import axios from 'axios';

import BodyLayout from './BodyLayout/BodyLayout.js';

class Data extends Component {

  state = {
    latestCurrencyData: [],
    archivedCurrencyData: []
  }

  getInput = (currencyInput, recordsInput) => {
    this.setState({
      archivedCurrencyData: []
    }); 
    // TU POBIERAM TABELĘ Z ARCHIWAMI I MUSZĘ DODAĆ ZMIENNE DO MODYFIKOWANIA URL
    axios.get('http://api.nbp.pl/api/exchangerates/rates/c/' + currencyInput + '/last/' + recordsInput + '/?format=json')
    .then(response => {
      this.setState({
        archivedCurrencyData: response.data.rates
      }); 
  })
  .catch(error => {
    console.log('Podczas pobierania aktualnej tabeli wystąpił błąd', error);
  });
}

  componentDidMount() {
    // TU POBIERAM TABELĘ C
    axios.get('http://api.nbp.pl/api/exchangerates/tables/c/?format=json')
    .then(response => {
      this.setState({
        latestCurrencyData: response.data[0].rates
      });
    })
    .catch(error => {
      console.log('Podczas pobierania aktualnej tabeli wystąpił błąd', error);
    });
  }

  render() {
    return (
      <BodyLayout latestCurrencyData={this.state.latestCurrencyData} archivedCurrencyData={this.state.archivedCurrencyData} onSubmit={this.getInput} />
    );
  }
}

export default Data;

