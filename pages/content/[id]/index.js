import { useState } from 'react';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

import { useCookies } from 'react-cookie';

import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch';
import NavItem from '../../components/NavItem';
import Article from '../../components/Article';

const Content = (props) => {
  //Certain time sensitive components should be kept to try/catch
  const [cookies, setCookie] = useCookies();

  //Maybe move pulling the article to here or move cookie passing to layout

  const generateList  = () => {
    return props.data.map((value, index) => {
      return (
        <NavItem id={value.id} key={index} label={value.label} />
      )
    });
  }

  return (
    <Layout>
      <div className="c-content">
        <section className="c-content__actual">
          <Article error={props.error} article={props.article} />
        </section>
        <nav>
          <ul className="c-content__nav">
            { generateList() }
          </ul>
        </nav>
      </div>

      {style()}
    </Layout>
  )

};

Content.getInitialProps = async (ctx) => {
  const {APP_URL} = publicRuntimeConfig;
  const { id } = ctx.query;
  console.log(cookies);
  let data, article, error;

  //Nav List
  try {
    const res = await fetch(`${APP_URL}/api/articles/list`);
    data = await res.json();
  } catch(e) {
    console.log("Error", e);
  }
  
  //Article
  try {
    const res2 = await fetch(`http://localhost:3000/api/articles/${id}`, {
      headers: {'Authorization' : token}
    });
    //Test if article exists from url
    // console.log(res2);
    if (res2.status === 204) { throw 204; }
    if (res2.status === 403) { throw 403; }
    //Check if it needs authorization from jwt
    //show forbidden text if not allowed
    article = await res2.json();
  } catch(e) {
    console.log("Error: ", e);
    error = e;
  }
  
  return {
    data: data,
    article: article,
    error: error
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
      nav {
        border-left: 1px solid lightgray;
      }
      
    `}</style>
  )
}

export default Content;