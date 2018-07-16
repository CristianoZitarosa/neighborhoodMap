import React, { Component } from 'react';

export default class SpecificLocation extends Component {

  render() {

    return (

      <li
        role="button"
        aria-label={`show marker for ${this.props.data.name}`}
        aria-hidden= {this.props.ariaHidden}
        tabIndex={this.props.ariaHidden ? "-1" : "0"} /*I use the same prop, they are related to the same element*/
        onKeyPress={this.props.openInfoWindow.bind(this, this.props.data.marker)}
        onClick={this.props.openInfoWindow.bind(this, this.props.data.marker)}>
        {this.props.data.name}
      </li>

    );

  }
}
