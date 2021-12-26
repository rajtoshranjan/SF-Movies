import React, { useContext } from "react";
import LocationMarker from "./LocationMarker";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { LocationContext } from "../Context";

const DefaultMap = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 37.755704, lng: -122.437344 }}
      />
    );
  })
);
const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const locationData = useContext(LocationContext);
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 37.755704, lng: -122.437344 }}
      >
        {locationData &&
          locationData.map(
            (data) =>
              data.lat &&
              data.lng && (
                <LocationMarker
                  key={"loc_marker" + data.id}
                  lat={data.lat}
                  lng={data.lng}
                  location={data.location}
                  funFact={data.fun_fact}
                  movie={data.movie}
                />
              )
          )}
      </GoogleMap>
    );
  })
);
export default function MapContainer(props) {
  const locationData = useContext(LocationContext);
  const mapUrl =
    "https://maps.googleapis.com/maps/api/js?key=" +
    process.env.REACT_APP_GOOGLE_MAP_API_KEY +
    "&v=3.exp&libraries=geometry,drawing,places";
  return locationData ? (
    <MyMapComponent
      googleMapURL={mapUrl}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  ) : (
    <DefaultMap
      googleMapURL={mapUrl}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
