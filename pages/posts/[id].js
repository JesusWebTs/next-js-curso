import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layaout";
import Title from "../../components/Title";
import Head from "next/head";

function Post({ post }) {
  const router = useRouter();
  console.log(post);
  const { id, userId, title, body } = post;
  return (
    <Layout>
      <Head>
        <title>Post #{id}</title>
        <meta name="description" content="En este curso de webtutoriales aprenderas next js"/>
      </Head>
      <div>
        <Title>Post Details</Title>
        <div className="card">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </Layout>
  );
}

export default Post;

export async function getServerSideProps({ params }) {
  const { id } = params;
  //contest.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
