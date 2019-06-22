import React from "react";
import SampleComponent from "../components/SampleComponent";
import Layout from "../components/Layout";
import axios from "axios";

const Settings = (props) => {
  console.log(props.posts)
  return (
    <div id="Settings">
      <Layout>
        <SampleComponent />
      </Layout>
    </div>
  );
}

Settings.getInitialProps = async function() {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const data = await posts.data;
  return {
    posts: posts.data
  };
};

export default Settings;
