import React from "react";
import { FaSearch } from "react-icons/fa";

import "./searchBar.styles.scss";

const SearchBar = ({ hSearch }) => {
  return (
    <div className={hSearch ? "h-search" : "SearchBar"}>
      <input
        type="text"
        className="input-search"
        placeholder="find your symptoms"
      />
      <button className="search-btn">
        <FaSearch className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
