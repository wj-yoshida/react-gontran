import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 10,
  lng: 0,
};

const GoogleMapWorld = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAamDDWeHcHCSljnPR3-km_wz53BUzDvS4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2.5}
      ></GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapWorld;