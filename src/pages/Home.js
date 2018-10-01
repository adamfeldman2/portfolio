import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pages-home wrapper">
      <p>
        I'm a web developer working at <a href="https://juicemobile.com" rel="noopener noreferrer" target="_blank">JUICE Mobile</a> in Toronto, using Vanilla JS, React, NodeJS, HTML, and CSS.
      </p>
      <p>
        Outside of work, I build my own <Link to="/personal">personal projects</Link> and take on <Link to="/freelance">freelance projects</Link>.
      </p>
      <p>
        You can get in touch with me <Link to="/contact">here</Link>.
      </p>
    </div>
  );
}

export default Home;
