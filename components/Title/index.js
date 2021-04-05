import React, { Children } from "react";

function Title(props) {
  const { children } = props;
  return (
    <h1>
      {children}
      <style jsx>
        {`
          h1 {
            margin: 0;
            font-size: 3rem;
            text-align: center;
            transition: translate(0, 0);
          }
        `}
      </style>
    </h1>
  );
}

export default Title;
