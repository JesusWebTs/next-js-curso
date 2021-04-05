import React from "react";
import Layout from "../components/Layaout";
import Title from "../components/Title";
function Home() {
  return (
    <Layout>
      <Title>Home Page</Title>
      <p>Next js con web tutoriales</p>
      <style jsx>
        {`
          p {
            color: darkgray;
          }
          p:hover {
            color: darkred;
          }
        `}
      </style>
    </Layout>
  );
}

export default Home;
