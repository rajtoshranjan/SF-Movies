import React, { useState, useEffect } from "react";
import MapContainer from "./components/MapContainer";
import "./App.css";
import SearchBox from "./components/SearchBox";
import { SearchContext, LocationContext } from "./Context";

function App() {
  const [loading, setLoading] = useState(false);
  const [locationData, setLocationData] = useState();
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    locationData && setMovieData(locationData[0]);
    return () => {
      setMovieData(null);
    };
  }, [locationData]);
  return (
    <>
      {loading && (
        <div className="loader-back">
          <div className="loader"></div>
        </div>
      )}
      <SearchContext.Provider
        value={{ loading, setLoading, movieData, setLocationData }}
      >
        <SearchBox />
      </SearchContext.Provider>
      <LocationContext.Provider value={locationData}>
        <MapContainer />
      </LocationContext.Provider>
    </>
  );
}

export default App;
