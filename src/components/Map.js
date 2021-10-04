import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.120362541104264,
      lng: 29.444655512991133,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="map" style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCyztbrBin4DSPLLqCh_WjookGbOWRQaPc" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.120362541104264}
            lng={29.444655512991133}
            text="Ecole Living"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
