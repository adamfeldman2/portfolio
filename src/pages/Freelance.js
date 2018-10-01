import React from 'react';

const Freelance = () => {
  return (
    <div className="pages-freelance">
      <div className="wrapper-heading-title">
        <img className="heading-image" src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/ee1eea1d-75fb-4d34-a011-62361824256e" alt="Freelance Projects Heading" />
        <h4>A selection of some freelance projects that I've built for clients</h4>
      </div>

      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/097fc5d8-5c37-4ff8-9c38-dc4b182ce0b3/lyfe-insured.jpg" alt="Lyfe Insured" />
        </div>
        <div className="wrapper-text">
          <h2>Lyfe Insured</h2>
          <p>This full stack, custom built web app was built using the MERN stack for Lyfe Insured, a brand new life insurance
          company looking to make life insurance easy. I worked closely with the Lyfe Insured team and designers to ensure that
      this web app worked and looked exactly like they dreamed.</p>
          <p>MONGODB / NODE.JS / EXPRESS / REACT</p>
          <a href="https://lyfeinsured.com" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>

      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/9fe69e78-3723-4d73-a835-422454adca25/va-screenshot.jpg" alt="Viviana &amp; Adam's Wedding" />
        </div>
        <div className="wrapper-text">
          <h2>Viviana &amp; Adam's Wedding</h2>
          <p>This custom built wedding website was built from scratch using the MERN stack. Using a single page application, like
          React, ensures speedy route-transitions. As well, the RSVP portion of the site was built with Node.js and MongoDB, to
      store all of the guest's RSVPs.</p>
          <p>REACT / NODE.JS / MONGODB / CSS</p>
          <a href="https://vivianaandadam.com" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>

      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/5148acc2-e05f-46d4-ad65-b30a9581bf57/ali-bryan.jpg" alt="Ali &amp; Bryan's Wedding" />
        </div>
        <div className="wrapper-text">
          <h2>Ali &amp; Bryan's Wedding</h2>
          <p>This fully responsive, custom built and designed wedding website was created for an awesome couple. It's a single page
      application built with Ember.js and uses a Firebase database to store guest's RSVP information.</p>
          <p>HTML / CSS / EMBER.JS / FIREBASE</p>
          <a href="https://ali-and-bryan.surge.sh/" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
    </div>

  );
}

export default Freelance;
