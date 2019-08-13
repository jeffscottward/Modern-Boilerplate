import React from "react";
import Layout from "../components/Layout";

const Finances = props => {
  return (
    <div id="Finances">
      <Layout>
        <img className="potato" alt="potato" src="/static/images/potato.png" />
        <img className="svg-logo" alt="svg-logo" src="/static/images/svg-logo.svg" />
        <style jsx>{`
          .potato { }
          .svg-logo { max-width: 250px; }
        `}</style>
      </Layout>
    </div>
  );
};

export default Finances;
