import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pages-home wrapper">
      <p>
        I'm a full stack web developer working at{" "}
        <a
          href="https://epiloguewills.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Epilogue
        </a>{" "}
        in Toronto, using the MERN stack.
      </p>
      <p>
        Outside of work, I build my own{" "}
        <Link to="/personal">personal projects</Link> and take on{" "}
        <Link to="/freelance">freelance projects</Link>.
      </p>
      <p>
        You can get in touch with me <Link to="/contact">here</Link>.
      </p>
    </div>
  );
};

export default Home;
