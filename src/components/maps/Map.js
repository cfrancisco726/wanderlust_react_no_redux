import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  render() {
      const markers = this.props.markers || []

      return (
      <GoogleMap
        defaultZoom={2}
        defaultCenter={this.props.center}>
        {markers.map((marker, index) => (
            <Marker key={index} {...{position: {lat: marker.location.lat,lng: marker.location.lng}}} />
            )
        )}
      </GoogleMap>
      )
  }
}

export default withGoogleMap(Map)
