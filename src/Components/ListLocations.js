import React, {Component} from 'react';
import SpecificLocation from './SpecificLocation';
import '../Styles/ListLocation.css'

export default class ListLocations extends Component {
  /**
  * States of the component
  **/
  state = {
    locations: [],
    selection: ''
  }

  /**
  * Search field.
  * Locations and typed names are lowercased and compared with indexOf method
  * If the result is not -1(not found) so condition is true then related markers
  *   are visible or disabled according to the search input
  **/
  selectPlace = (event) => {
    this.props.closeInfoWindow();
    const { value } = event.target;
    let locations = [];
    this.props.points.forEach(function (location) {
      if ( location.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        location.marker.setVisible(true);
        locations.push(location);
      } else {
        location.marker.setVisible(false);
      }
    });
    this.setState({ locations: locations, selection: value });
  }

  componentWillMount() {
    this.setState({ locations: this.props.points });
  }

  render() {
    // toggle class on sidebar to open/close
    let menuOnOff='';
    (this.props.slidemenu) ? menuOnOff='sidebar menu-open' : menuOnOff='sidebar menu-closed';

    if(this.state.locations) {

      return (
        <div className={menuOnOff}>

          <input
            role="search"
            aria-labelledby="input search-field"
            id="search-field"
            className="search-field"
            type="text"
            title="select a specific place"
            placeholder="Select a specific place"
            value={this.state.selection} onChange={this.selectPlace} />

            <ul>
              {
                this.state.locations.map((listItem, index) => (
                  <SpecificLocation
                    key={index}
                    openInfoWindow={this.props.openInfoWindow}
                    data={listItem}
                    ariaHidden = {!this.props.slidemenu}
                  />
                ))
              }
            </ul>

          </div>
        );
      } else {
        return (
          <div>
            <p>
              An error occurred while retrieving data.
            </p>
          </div>
        )
      }

    }
  }
