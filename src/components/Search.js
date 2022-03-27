import React, { useState } from "react";
import { SearchBox, PoweredBy } from "react-instantsearch-dom";

const Search = ({ searchString, setSearchString }) => {
  const [searched, setSearched] = useState(false);

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     createStringQuery();
  //   }
  // };

  return (
    <div>
      <SearchBox />
      <PoweredBy />
    </div>
  );
};

export default Search;
