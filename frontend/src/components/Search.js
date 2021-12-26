import React, { useState, useContext, createContext } from "react";
import { SearchContext } from "../Context";

export default function Search(parms) {
  const [suggestions, setSuggestions] = useState([]);
  const textInput = React.createRef();
  const { loading, setLoading, setLocationData } = useContext(SearchContext);

  const getSuggestions = async (e) => {
    if (e.target.value === "") return;
    await fetch(
      "https://sfmovies.pythonanywhere.com/search?movie=" + e.target.value
    )
      .then((response) => response.json())
      .then((data) => setSuggestions(data));
  };

  const getLocationData = async () => {
    if (textInput.current.value === "") return;

    if (!suggestions.map((a) => a.title).includes(textInput.current.value)) {
      alert("Please Select a Movie from the suggestion");
      return;
    }
    setLocationData(null);
    setLoading(true);
    await fetch(
      "https://sfmovies.pythonanywhere.com/location/" + textInput.current.value
    )
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data);
        setLoading(false);
      });
  };

  return (
    <>
      <form>
        <input
          type="text"
          className="textbox"
          placeholder="Search"
          onChange={getSuggestions}
          list="suggestions"
          ref={textInput}
        />
        <datalist id="suggestions">
          {suggestions &&
            suggestions.map((item) => (
              <option value={item.title} key={"sug_key_" + item.id} />
            ))}
        </datalist>
        <button
          title="Search movie"
          type="button"
          className="button"
          onClick={getLocationData}
          disabled={loading}
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </>
  );
}
