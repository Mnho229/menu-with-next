import {useState} from 'react';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import { parseCookies } from 'nookies';

import Layout from './components/Layout'
import fetch from 'isomorphic-unfetch';

const Content = (props, ctx) => {
  let user = parseCookies(ctx);

  console.log(user);

  console.log(props.data.name + " Boi");
  return (
    <Layout>
      <div className="c-content">
        <section className="c-content__actual">
          <article className="c-content__article">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar. Augue lacus viverra vitae congue eu. Purus in massa tempor nec feugiat. Interdum consectetur libero id faucibus. Arcu dui vivamus arcu felis bibendum ut tristique. In eu mi bibendum neque. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Ultricies tristique nulla aliquet enim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar. Augue lacus viverra vitae congue eu. Purus in massa tempor nec feugiat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar. Augue lacus viverra vitae congue eu. Purus in massa tempor nec feugiat. Interdum consectetur libero id faucibus. Arcu dui vivamus arcu felis bibendum ut tristique. In eu mi bibendum neque. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Ultricies tristique nulla aliquet enim.</p>
          </article>
        </section>
        <nav>
          <ul className="c-content__nav">
            <li className="nav-items">King</li>
            <li className="nav-items">Queen</li>
          </ul>
        </nav>
      </div>

      {style()}
    </Layout>
  )

};

Content.getInitialProps = async (ctx) => {
  //Use Destructuring to grasp JSON, then maybe remove cookie or
  //utilize for something else

  console.log(publicRuntimeConfig);
  const { APP_URL } = publicRuntimeConfig;
  let data = {};
  try {
    const res = await fetch(`${APP_URL}/api/auth`, {
      credentials: "include",
      headers: {
        cookie: JSON.stringify(parseCookies(ctx)),
      }
    });
    data = await res.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
  return {
    data: data
  };
}

function style() {
  return (
    <style jsx="true">{`
      .c-content {
        display: flex;
        padding: 1rem;
        font-family: sans-serif;
      }
      .c-content__actual {
        display: flex;
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
        border-left: 1px solid lightgray
      }
      .nav-items {
        font-size: 2rem;
        padding: 1rem 5rem 1rem 1rem;
        list-style: none;
      }
    `}</style>
  )
}

export default Content;