import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Mother</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
)

export default Layout;