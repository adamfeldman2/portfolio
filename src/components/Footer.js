import React from 'react';

const Footer = () => {
  return (
    <footer className="components-footer wrapper">
      <div className="wrapper-social">
        <a href="https://blog.adamcodes.ca">
          BLOG
        </a>
        <a href="https://github.com/adamfeldman2" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://codepen.io/_adamfeldman/pens/public/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-codepen" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/_adamfeldman" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/amfeldman1" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
