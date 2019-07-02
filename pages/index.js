import Layout from './components/Layout';
import fetch from 'isomorphic-unfetch';

import Prices from './components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to the world</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.data} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    data: data
  };
}

export default Index;