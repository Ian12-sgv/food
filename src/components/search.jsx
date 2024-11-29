import React, { useState, useEffect } from "react";
import serch from "../assets/svg/serch.svg";

function Search() {
  const [eat, setEat] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search for food, coffe, etc.."
        className="search-input"
      />

      <img src={serch} className="serch-icon" />
    </div>
  );
}

export default Search;
