import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <header>
      <nav>
 
          <Link href="/">
            <a style={{ textDecoration: "none" }}>Home</a>
          </Link>
          <Link href="/users">
            <a>Users</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
          <style jsx>
            {`
              nav {
                padding-top: 10px;
              }
              a {
                padding: 0 10px;
              }
            `}
          </style>
          {/* <Link href="/posts/[id]" as={`/posts/${5}`}>
            Post
          </Link> */}
      </nav>
    </header>
  );
}

export default NavBar;
