import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default function LocationMarker(props) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Marker
      position={{ lat: props.lat, lng: props.lng }}
      title={props.location}
      onClick={() => setShowInfo(!showInfo)}
    >
      {showInfo && (
        <InfoWindow onCloseClick={() => setShowInfo(false)}>
          <div style={{ maxWidth: "250px" }}>
            <h3 style={{ color: "brown" }}>{props.movie}</h3>
            <hr style={{ border: "solid 1px brown" }} />
            <p>
              <b>Location:</b> {props.location}
            </p>

            <p>
              {props.funFact !== "nan" && (
                <>
                  <b>Fun Fact:</b> {props.funFact}
                </>
              )}
            </p>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
}
