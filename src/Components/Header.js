import React, { Component } from 'react'
import '../Styles/Header.css'

class Header extends Component {
render() {
    return (

      <div className="header">
        <h1>Some nice places around Salerno</h1>
        <button
          aria-label="toggle menu"
          className="menu-button"
          onClick={ this.props.slideMenu }>
          { this.props.slidemenu ? 'Hide' : 'Show' } Menu
        </button>
      </div>

    );
  }
}

export default Header
