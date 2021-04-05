import Head from "next/head";
import React from "react";
import Layout from "../components/Layaout";
import Title from "../components/Title";
function Home() {
  return (
    <Layout>
      <Head>
        <title>Aprendamos Next JS con web tutoriales</title>
        <meta name="description" content="En este curso de webtutoriales aprenderas next js"/>
      </Head>
      <Title>Home Page</Title>
      <p>Next js con web tutoriales</p>
      <p>Terminando el curso</p>
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
