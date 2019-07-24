import Head from 'next/head';
import Navbar from './Navbar';
import { CookiesProvider} from 'react-cookie';

const Layout = (props) => {
  
  return (
    <CookiesProvider>
      <Head>
        <title>Mother</title>
      </Head>
      <Navbar />
      {props.children}
  </CookiesProvider>
  );
}

export default Layout;