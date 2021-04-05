import Link from "next/link";
import React from "react";
import Layout from "../../components/Layaout";
import Title from "../../components/Title";
import { usePosts } from "../../hooks/usePosts";
import Style from "./styles";

function Posts({ posts = [] }) {
  // CLIENT SIDE RENDERING
  // const { posts } = usePosts();

  return (
    <Layout>
      <div>
        <Title>Posts Page</Title>
        <div className="grid">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={"/posts/[id]"}
              as={`/posts/${post.id}`}
            >
              <a className="card">
                <h3>{post.title}</h3>
                <p>{post.boddy}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Style />
    </Layout>
  );
}

export default Posts;

export async function getServerSideProps() {
  // CLIENT SIDE RENDERING
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
// export async function getInitialProps() {}
