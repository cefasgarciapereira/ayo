import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import Fade from 'react-reveal/Fade'
import styles from './styles.module.css'
 
export class Section6 extends Component {

  render() {
    return (
      <div className={styles.googlemaps}>
        <Fade>
          <Map 
          visible
          google={this.props.google} 
          zoom={15}
          resetBoundsOnResize
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          style={{height: '40rem', width: '100%'}}>
          </Map>
        </Fade>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDFQiDheRAzphzJ2_CZs3mTR1VlcCLjwFs')
})(Section6)