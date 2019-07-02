import { useState } from 'react';

export default function Prices(props) {
  const [currency, setCurrency] = useState('USD');

  let list = '';
  
  if (currency === 'USD') {
    list = <li>Bitcoin Rate for {props.bpi.bpi.USD.description}
    : <span>{props.bpi.bpi.USD.code}</span> <strong>{props.bpi.bpi.USD.rate}</strong></li>
  } else if (currency === 'GBP') {
    list = <li>Bitcoin Rate for {props.bpi.bpi.GBP.description}
    : <span>{props.bpi.bpi.GBP.code}</span> <strong>{props.bpi.bpi.GBP.rate}</strong></li>
  } else if (currency === 'EUR') {
    list = <li>Bitcoin Rate for {props.bpi.bpi.EUR.description}
    : <span>{props.bpi.bpi.EUR.code}</span> <strong>{props.bpi.bpi.EUR.rate}</strong></li>
  }

  return (
    <div>
      <ul>
        {list}
      </ul>
      <br />
      <select onChange={e => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}