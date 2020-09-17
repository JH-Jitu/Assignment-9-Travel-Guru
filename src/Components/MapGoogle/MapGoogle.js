import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { useParams } from 'react-router-dom';

class MapGoogle extends Component {
    render(){
        
    return (
        
        <div>
            <Map
          google={this.props.google}
          style={{width: 500, height: 500, position: 'relative', align: 'center'}}
          initialCenter={{
            lat: 23.8103,
            lng: 90.4125
          }}
          zoom={14}
          onClick={this.onMapClicked}
        >
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>

        </div>
    );
};
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8")
  })(MapGoogle)