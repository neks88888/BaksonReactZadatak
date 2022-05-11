import React, { useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(TicketsContext);
  <h1>Search for tickets</h1>;
  return (
    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
  );
}

export default SearchBar;
