import React from "react";

function Container({ children }) {
  return (
    <div className="max-w-5xl mx-auto  px-4 lg:px-0 w-full">{children}</div>
  );
}

export default Container;
