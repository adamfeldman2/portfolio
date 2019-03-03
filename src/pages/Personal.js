import React from 'react';

const Personal = () => {
  return (
    <div className="pages-personal">
      <div className="wrapper-heading-title">
        <img className="heading-image" src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/03165a41-551f-420f-a0d2-f7990f081d7f"
          alt="Personal Projects Heading" />
        <h4>A selection of some personal projects that I've built</h4>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/563ff3ce-4580-462f-89ea-1899f1d4c621/rehabit2.jpg" alt="Rehabit" />
        </div>
        <div className="wrapper-text">
          <h2>Rehabit</h2>
          <p>(Beta Testing Phase) A full-stack application designed to make physiotherapists' lives easier and help them get their patients healthier by making program creation and delivery easy.</p>
          <p>REACT / NODE.JS / MONGODB / SCSS</p>
          <a href="https://myrehabit.com" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/2834e0d0-b951-4e76-b4a8-705b7dfeba66/when-pigs-fly-game.jpg" alt="When Pigs Fly" />
        </div>
        <div className="wrapper-text">
          <h2>When Pigs Fly</h2>
          <p>When Pigs Fly is an addictive game built using vanilla JavaScript and HTML5 canvas. It can be played on either
            mobile or desktop, and has controls so simple, anybody can play! See if you can beat my personal high score of
        $76. </p>
          <p>VANILLA JS / HTML5 CANVAS / CSS</p>
          <a href="https://when-pigs-fly.surge.sh/" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/f3579b71-78c0-4f20-a04e-a7275a93842f/commandlinechat.jpg" alt="Command Line Chat" />
        </div>
        <div className="wrapper-text">
          <h2>Command Line Chat</h2>
          <p>Command Line Chat is a real-time chat app built on socket.io. The app is designed to resemble a stereotypical
            hacker's command line, which will hopefully fool your boss into thinking you're working, when you're really
        chatting with fellow developers. </p>
          <p>SOCKET.IO / NODE.JS / REACT / SCSS</p>
          <a href="https://command-line-chat-app.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/427bd37d-8f83-4785-8193-7eb042e5c417/review-everything.jpg" alt="Review Everything" />
        </div>
        <div className="wrapper-text">
          <h2>Review Everything</h2>
          <p>Review Everything is a React/Redux/Firebase web app that allows a user to create, store, and edit private
            reviews. User's can organize reviews by category or search for a specific review with the search/filter
        functionality. </p>
          <p>REACT / REDUX / FIREBASE / CSS</p>
          <a href="http://revieweverything.site" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/dece65cb-fa70-4115-97d7-4dcf60c2bdfe/boundary-generator.jpg" alt="GPS Boundary Generator" />
        </div>
        <div className="wrapper-text">
          <h2>GPS Boundary Generator</h2>
          <p>GPS Boundary Generator is a JavaScript web app that utilizes the Google Maps API and was built without any
            external frameworks--just vanilla JavaScript. The app allows the user to enter a set of GPS coordinates and
        display a boundary on the map. </p>
          <p>HTML / CSS / VANILLA JS / GOOGLE MAPS API</p>
          <a href="https://jolly-insurance.surge.sh" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/372ed4e6-764a-4877-9ebe-8eea553c889c/guess-the-word-v2.jpg" alt="Guess The Word" />
        </div>
        <div className="wrapper-text">
          <h2>Guess The Word</h2>
          <p>Guess The Word is a surprisingly addictive hangman-style game built using HTML, CSS, and vanilla JavaScript.
        The game allows the user to select their desired level-of-difficulty and word-category. </p>
          <p>HTML / CSS / VANILLA JS</p>
          <a href="https://guessthewordgame.surge.sh/" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/18bd3131-f144-42c1-bdc2-a31f6b4ca492/the-homepage.jpg" alt="The Home Page" />
        </div>
        <div className="wrapper-text">
          <h2>The Home Page</h2>
          <p>The Home Page is a JavaScript web app, powered by the Weather Underground API. Save The Home Page as your
        homepage to enjoy a more beautiful way to begin your browsing experience. </p>
          <p>HTML / CSS / API / JAVASCRIPT</p>
          <a href="https://thehomepage.surge.sh" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
      <div className="wrapper-project">
        <div className="wrapper-image">
          <img src="https://cdn.tipe.io/5a96f70dc991f100139cbb71/2218704b-a985-4319-bbbb-e2413f19c098/good-host-v2.jpg" alt="Good Host" />
        </div>
        <div className="wrapper-text">
          <h2>Good Host</h2>
          <p>Good Host is a fully responsive JavaScript project, powered by the Yummly API. It allows the user (party host)
        to search for a recipe that is free of common allergens, including gluten, dairy, or nuts. </p>
          <p>HTML / CSS / API / JAVASCRIPT</p>
          <a href="http://goodhost.surge.sh/" rel="noopener noreferrer" target="_blank">View Live</a>
        </div>
      </div>
    </div>
  );
}

export default Personal;
