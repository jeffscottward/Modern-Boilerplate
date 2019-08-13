import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";

import Global from "../constants/Global";

import { StateProvider } from "../state/state";
import Reducer from "../state/reducer";

const Layout = props => (
  <div id="Layout">
    <StateProvider initialState={Global} reducer={Reducer}>
      <Header />
      <Main>{props.children}</Main>
    </StateProvider>
    <style jsx global>{`
      // Dev - FontFace
      @import "/static/fonts/Roboto-Mono/stylesheet.css";
      // Prod - Use Plugin
      // https://github.com/zeit/next-plugins/tree/master/packages/next-css

      * {
        box-sizing: border-box;
        font-family: sans-serif;
        font-family: "Roboto Mono";
      }
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: #eeeeee;
      }
      ul {
        display: flex;
      }
      ul,
      li {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      button,
      a {
        cursor: pointer;
      }
      a,
      span {
        display: inline-block;
      }
      a {
        text-decoration: none;
      }
      p a {
        text-decoration: underline;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin-top: 0;
      }
    `}</style>
  </div>
);

export default Layout;
