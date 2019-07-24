import getConfig from 'next/config';
import Layout from './components/Layout';

const Index = (props) => {

  return (
    <Layout>
      <div>
        <h1>Welcome to the world</h1>
        <p>you are now being waaaaaatched</p>
      </div>
    </Layout>
  )

};

export default Index;