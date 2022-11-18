import GoogleMapReact from 'google-map-react';

export default function Create() {
  const defaultLatLng = {
    lat: 10,
    lng: 0,
  };
  const demoFancyMapStyles = require("./MapStyles.json");
  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAamDDWeHcHCSljnPR3-km_wz53BUzDvS4" }}
        defaultCenter={defaultLatLng}
        defaultZoom={2}
        options={{ styles: demoFancyMapStyles }}
      />
    </>
  );
}