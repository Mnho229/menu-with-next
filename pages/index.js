import Layout from './components/Layout';
import fetch from 'isomorphic-unfetch';

import Prices from './components/Prices';
import { setCookie } from 'nookies';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to the world</h1>
      <p>you are now being waaaaaatched</p>
    </div>
  </Layout>
);

Index.getInitialProps = async function(ctx) {
  setCookie(ctx, 'Eye', 'Subject Not Suspicious',  {
    maxAge: 30 * 24 * 60,
    path: '/'
  });

  return {};
}

export default Index;