import React from "react";

const Decoration = ({ absolute }) => {
  return <div className={absolute ? "backgroundAbsolute" : "background"}></div>;
};

export default Decoration;
