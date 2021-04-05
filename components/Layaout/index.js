import React from "react";
import NavBar from "../NavBar";

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <style jsx>
        {`
          div {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
          }
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}

export default Layout;
