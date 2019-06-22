import React from "react";

import { useStateValue } from "../state/state";

const Main = (props) => {
  const [{ css }, dispatch] = useStateValue();
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