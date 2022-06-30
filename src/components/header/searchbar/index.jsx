import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useQuery } from "react-query";
import "./searchbar.scss";
import { searchFetch } from "./searchFunctions";
import { SearchResults } from "./search_results";

export const SearchBar = () => {
  const [value, setValue] = useState("");

  const { data, isLoading } = useQuery(["searchProds", value], () =>
    searchFetch(value)
  );

  const searchValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="searchbar">
        <input
          className="searchbar-input"
          type="text"
          placeholder="Search..."
          onChange={(e) => searchValue(e)}
        ></input>
        <HiOutlineSearch className="search-icon"></HiOutlineSearch>
      </div>
      {data !== undefined && value !== "" && (
        <div className="results-wrapper">
          {data.paginatedItems.map((element) => (
            <SearchResults
              elemental={element}
              isLoading={isLoading}
            ></SearchResults>
          ))}
        </div>
      )}
    </div>
  );
};
