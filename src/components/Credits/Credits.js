import React from "react";
import "./Credits.css";

const Credits = () => {
  return (
    <section className="Credits">
      <a
        href="https://github.com/jefferson227"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github Credits__icon__left"></i>
      </a>
      <a
        href="https://twitter.com/jeffersonm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter Credits__icon"></i>
      </a>
    </section>
  );
};

export default Credits;
