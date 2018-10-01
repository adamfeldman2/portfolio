import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navActive: false
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState((prevState) => {
      return { navActive: !prevState.navActive };
    });
  }

  render() {
    return (
      <nav className="components-header">
        <div className="wrapper-nav-inner wrapper">
          <Link onClick={() => {
            if (this.state.navActive) {
              this.handleMenuClick();
            }
          }} to="/">
            <h1>Adam Feldman</h1>
          </Link>
          <div onClick={this.handleMenuClick} className="wrapper-menu-icon">
            {this.state.navActive ? (
              <i className="fa fa-times" aria-hidden="true" />
            ) : (
                <i className="fa fa-bars" aria-hidden="true" />
              )
            }
          </div>
        </div>

        <ul className={`slideout-menu ${this.state.navActive && 'active'}`}>
          <li>
            <Link onClick={this.handleMenuClick} to="/personal">Personal Projects</Link>
          </li>
          <li>
            <Link onClick={this.handleMenuClick} to="/freelance">Freelance Projects</Link>
          </li>
          <li>
            <Link onClick={this.handleMenuClick} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
