import React from "react";
import Header from "./Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <div className="mx-auto md:max-w-6xl bg-black">{props.children}</div>
    </div>
  );
}

export default Layout;
