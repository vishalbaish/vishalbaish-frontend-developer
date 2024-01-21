import React, { useEffect, useMemo, useState } from "react";

export const SearchContext = React.createContext();

export const SearchContextProvider = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [fetchedData, setFetchedData] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingScreen, setLoadingScreen] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    return await fetch("https://api.spacexdata.com/v3/rockets")
      .then((res) => res.json())
      .then((result) => {
        setFetchedData(result);
        setFilteredData(result);
      })
      .catch((error) => console.log("error happened", error));
  };

  return (
    <SearchContext.Provider
      value={{
        getData,
        fetchedData,
        setFilteredData,
        setSearchQuery,
        searchQuery,
        data: filteredData,
        setLoadingScreen,
        loadingScreen,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
