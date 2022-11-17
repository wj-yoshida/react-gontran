import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 10,
  lng: 0,
};

const mapStyle = [
  {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          },
          {
              "weight": "0.30"
          }
      ]
  },
  {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#636363"
          }
      ]
  },
  {
      "featureType": "administrative.locality",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "administrative.neighborhood",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ff0000"
          }
      ]
  },
  {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "off"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "landscape.natural.landcover",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "saturation": -100
          },
          {
              "lightness": 45
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#ececec"
          },
          {
              "visibility": "on"
          }
      ]
  }
];

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  // デフォルトUI（衛星写真オプションなど）をキャンセルします。
  zoomControl: true,
};



function GoogleMapWorld() {
  return (
    
    <LoadScript
      googleMapsApiKey="AIzaSyAamDDWeHcHCSljnPR3-km_wz53BUzDvS4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
        options={options}
      >
      </GoogleMap>
    </LoadScript>
    
  )
}

export default React.memo(GoogleMapWorld);