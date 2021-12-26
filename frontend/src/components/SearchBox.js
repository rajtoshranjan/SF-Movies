import React, { useContext, useState, useEffect } from "react";
import { SearchContext } from "../Context";
import Search from "./Search";

export default function SearchBox() {
  const { movieData } = useContext(SearchContext);
  const [dispResult, setDispResult] = useState(true);

  useEffect(() => {
    setDispResult(true);
  }, [movieData]);

  return (
    <div className="search-box">
      <div className="card">
        <h2>
          <i className="fas fa-film"></i> SF Movies
        </h2>
        <hr style={{ marginTop: "1px", marginBottom: "5px" }} />
        <Search />
        <br />
        <br />
      </div>
      {movieData && (
        <div
          className="card"
          style={{ maxWidth: "310px", display: dispResult ? "block" : "none" }}
        >
          <h3>
            <i className="fas fa-poll-h"></i> Search Result
            <i
              className="fas fa-times-circle"
              style={{ float: "right" }}
              onClick={() => setDispResult(false)}
            ></i>
          </h3>
          <hr style={{ marginTop: "5px", marginBottom: "3px" }} />
          <ListInfo title={"Movie"} value={movieData.movie}></ListInfo>
          <ListInfo
            title={"Released In"}
            value={movieData.release_year}
          ></ListInfo>
          <ListInfo title={"Directed By"} value={movieData.director}></ListInfo>
          <ListInfo title={"Written By"} value={movieData.writer}></ListInfo>
          <ListInfo
            title={"Distributed By"}
            value={movieData.distributor}
          ></ListInfo>
          <ListInfo
            title={"Production Company"}
            value={movieData.production}
          ></ListInfo>
          <ListInfo
            title={"Actors"}
            value={movieData.actors.map(({ id, name }, i) => {
              if (name === "nan") return;
              const n = i === movieData.actors.length - 1 ? name : name + " | ";
              return n;
            })}
          ></ListInfo>
        </div>
      )}
    </div>
  );
}

const ListInfo = ({ title, value }) => {
  return (
    <p>
      <b>{title}:</b> {value}
    </p>
  );
};
