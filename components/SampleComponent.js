import React, { useEffect } from "react";
import Moment from "moment";
import axios from "axios";

import { useStateValue } from "../state/state";

const SampleComponent = props => {
  const [{ state }, dispatch] = useStateValue();

  useEffect(() => {
    async function getData(url) {
      const posts = await axios.get(url);
      console.log(posts.data);
      return posts;
    }
    getData("https://jsonplaceholder.typicode.com/comments");
  }, []);

  return (
    <div>
      <h1>SampleComponent.js</h1>
      Page load time: {Moment().format("MMMM Do YYYY, h:mm a")}
      <style jsx>{``}</style>
    </div>
  );
};

export default SampleComponent;
