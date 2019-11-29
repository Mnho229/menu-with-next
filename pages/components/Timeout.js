import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react';

const Timeout = (props) => {

  const [rTime, setrTime] = useState(null);
  
  useEffect(() => {
    pingTime().then( (data) => setrTime(data.msg) );
    
  });


  return (
    <div className="c-timeout">
      <p>Expiration time (secs): {rTime}</p>

      {style()}
    </div>
  );
}

function style() {
  return <style jsx="true">{`
    .c-timeout {
      position: fixed;
      width: 100%;
      height: 50%;
      top: 20%;
      left: 0;
      
      display: flex;
      justify-content: center;
      align-items: center;

    }

    .c-timeout p {
      padding: 8rem;
      text-align: center;
      border-radius: 0.75rem;
      background-color: #94C1DD;
      width: 40rem;
      box-shadow: 0 7px 4px #777;

      font-size: 2rem;
      font-family: sans-serif;
    }
  `}</style>
}

//make this partial app fn
let getTDiff = (time1, time2) = () => {
  return 
}

let pingTime = async() => {
  const { APP_URL } = publicRuntimeConfig;

  let data = {};

  try {
    const res = await fetch(`${APP_URL}/api/auth/ping`);
    data = await res.json();
    console.log('ping data: ', data);
    return data;
  } catch(e) {
    console.log('ping error: ', e);
  }
}

export default Timeout;