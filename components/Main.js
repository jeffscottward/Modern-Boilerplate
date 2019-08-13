import React from "react";
import Global from "../constants/Global";
const { css } = Global;

const Main = (props) => {
  return (
    <main>
      {props.children}
      <style jsx>{`
        main {
          background: white;
          padding: 2rem;
          margin: auto;
          max-width: ${css.sizes.pageMaxWidth};
        }
      `}</style>
    </main>
  );
}

export default Main