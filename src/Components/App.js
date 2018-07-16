import React, { Component } from 'react';
import { locations } from '../Utils/locations'
import { getMarkerInfo } from '../Utils/wikipediaSearch'
import { styles } from '../Styles/mapStyle'
import Header from './Header'
import SideMenu from './SideMenu'
import '../Styles/App.css'

export default class App extends Component {
  /**
  * States of the component
  **/
  state = {
      points: locations,
      map: '',
      infowindow: '',
      currentMarker: '',
      slidemenu:false
  }

  /**
  * Invoked immediately after the component is mounted
  **/
  componentDidMount() {
    window.initMap = this.initMap;
    window.gm_authFailure = this.gm_authFailure;
    loadMap('https://maps.googleapis.com/maps/api/js?key= YOUR_API_KEY_HERE &callback=initMap');
  }

  /**
  * Everything related to the map loading
  **/

  initMap = () => {
    const { points } = this.state;
    let _this = this;

    let mapview = document.getElementById('map');

    const map = new window.google.maps.Map(mapview, {
      center: { lat: 40.386603, lng: 15.068264 },
      zoom: 8,
      styles: styles,
      mapTypeControl: false
    });

    let InfoWindow = new window.google.maps.InfoWindow({});

    this.setState({ map: map, infowindow: InfoWindow });

    window.google.maps.event.addListener(InfoWindow, 'closeclick', function () {
      _this.closeInfoWindow();
    });

    window.google.maps.event.addDomListener(window, "resize", function () {
      let center = map.getCenter();
      window.google.maps.event.trigger(map, "resize");
      _this.state.map.setCenter(center);
    });

    window.google.maps.event.addListener(map, 'click', function () {
      _this.closeInfoWindow();
    });

    /**
    * Updates the states for every location in pointsCollection
    **/
    let pointsCollection = [];
    points.forEach(function (location) {
      let marker = new window.google.maps.Marker({
        name: location.name,
        position: new window.google.maps.LatLng(location.latitude, location.longitude),
        map: map
      });

      marker.addListener('click', function () {
        _this.openInfoWindow(marker);
      });

      location.marker = marker;
      pointsCollection.push(location);
    });
    this.setState({ points: pointsCollection });
  }

  gm_authFailure = () => {
    let errorName = "map-error";
    let errorContent = "It is not possible to load the map at the moment.";
    let element = document.getElementById('map');
    element.classList.add(errorName);
    element.innerHTML = errorContent;
  }

  /**
  * Opens the infoWindow related to the marker
  **/
  openInfoWindow = (marker) => {
    this.closeInfoWindow();
    this.state.infowindow.open(this.state.map, marker);
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    this.setState({ currentMarker: marker });
    this.state.infowindow.setContent('Retrieving data...');
    this.state.map.setCenter(marker.getPosition());
    getMarkerInfo(marker, this.state.infowindow);
  }

  /**
  * Close the infoWindow related to the marker
  **/
  closeInfoWindow = () => {
    if (this.state.currentMarker) {
      this.state.currentMarker.setAnimation(null);
    }
    this.setState({ currentMarker: '' });
    this.state.infowindow.close();
  }

  /**
  * Related to the state of the slide menu
  **/
  slideMenu = () => {
    this.setState({ slidemenu: !this.state.slidemenu });
  }

  render() {
    return (
      <div className="App">

        <Header
          slidemenu={this.state.slidemenu} //gets the state of slidemenu
          slideMenu={this.slideMenu} //gets the function of slideMenu
        />

        <div className="container">
          <SideMenu
            slidemenu={this.state.slidemenu} //gets the state of slidemenu, used for the tabindexes
            points={this.state.points}
          openInfoWindow={this.openInfoWindow}
          closeInfoWindow={this.closeInfoWindow}/>

          <div id="map"
            aria-label="map of places"
            role="application"></div>
        </div>

      </div>
    );
  }

}

function loadMap(src) {
  const catchScript = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  script.onerror = function () {
    document.write("An error occurred while loading the map.");
  };
  catchScript.parentNode.insertBefore(script, catchScript);
}
