import { useState } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch';
import NavItem from '../../components/NavItem';

const Content = (props) => {
  const router = useRouter();
  const { title } = router.query;

  console.log(props.data.name + " Boi ");
  return (
    <Layout>
      <div className="c-content">
        <section className="c-content__actual">
          <article className="c-content__article">
            <h3>{title} a piece of my midn has been made up</h3>
          </article>
        </section>
        <nav>
          <ul className="c-content__nav">
            <NavItem id="1" />
            <NavItem id="2" />
          </ul>
        </nav>
      </div>

      {style()}
    </Layout>
  )

};

Content.getInitialProps = async (ctx) => {
  const {APP_URL} = publicRuntimeConfig;

  let data = {};
  
  return {
    data: data
  }
}

function style() {
  return (
    <style jsx="true">{`
      .c-content {
        display: flex;
        padding: 1rem;
        font-family: sans-serif;
        width: 100%;
      }
      .c-content__actual {
        display: flex;
        width: 75%;
      }
      .c-content__article {
        text-align: left;
        margin: auto;
        width: 50%;
        line-height: 2rem;
        font-family: Georgia;
        font-size: 1.2rem;
      }
      nav {
        border-left: 1px solid lightgray;
      }
      
    `}</style>
  )
}

export default Content;