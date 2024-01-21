import React, { useContext, useEffect, useReducer, useState } from "react";
import styles from "./index.module.scss";
import searchIcon from "../../assets/searchIcon.png";
import filterIcon from "../../assets/filter.png";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const filterOptions = [
  {
    name: "Active",
    type: "checkbox",
    id: "active",
  },
  {
    type: "select",
    name: "Country",
    options: [
      {
        name: "All",
        value: "all",
      },
      {
        name: "United States",
        value: "United States",
      },
      {
        name: "Republic of the Marshall Islands",
        value: "Republic of the Marshall Islands",
      },
    ],
    id: "country",
  },
  {
    name: "Cost per launch (x1,00,000)",
    type: "range",
    id: "cost_per_launch",
  },
];

const initialState = {
  active: false,
  country: "all",
  cost_per_launch: {
    minValue: 0,
    maxValue: 10000000000,
  },
};

const actionTypes = {
  handleInputChange: "handleInputChange",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.handleInputChange:
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

const SearchBox = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { fetchedData, setFilteredData, searchQuery, setSearchQuery } =
    useContext(SearchContext);
  const hanldeFilter = () => {
    setFilterOpen((prev) => !prev);
  };

  const handleApplyChanges = () => {
    if (filterOpen) {
      setFilterOpen((prev) => !prev);
    }
    setFilteredData(() => {
      let allData = [...fetchedData];
      let _filteredData = allData.filter(
        (data) =>
          (state.country == "all" ? true : data.country == state.country) &&
          (!state.active ? true : data.active) &&
          state.cost_per_launch.minValue <= data.cost_per_launch &&
          data.cost_per_launch <= state.cost_per_launch.maxValue
      );
      return _filteredData;
    });
  };

  const handleSelect = (e) => {
    let payload = {
      [e.target.name]: e.target.value,
    };
    if (e.target.type == "checkbox") {
      payload = {
        [e.target.name]: e.target.checked,
      };
    }
    dispatch({
      type: actionTypes.handleInputChange,
      payload,
    });
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChange = (name, value) => {
    dispatch({
      type: actionTypes.handleInputChange,
      payload: {
        [name]: {
          minValue: value[0],
          maxValue: value[1],
        },
      },
    });
  };

  return (
    <div className={styles.searchBoxWrapper}>
      <img src={searchIcon} className={styles.Icon} />
      <input
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
        type="text"
        className={styles.input}
      />
      <img onClick={hanldeFilter} src={filterIcon} className={styles.Icon} />
      {filterOpen && (
        <>
          <div onClick={hanldeFilter} className={styles.overlay}></div>
          <div className={styles.filterForm}>
            {filterOptions.map((input) => {
              return (
                <div className={styles.inputWrapper}>
                  {input.type == "select" ? (
                    <>
                      <label>{input.name}</label>
                      <select name={input.id} onChange={(e) => handleSelect(e)}>
                        {input.options.map((option) => {
                          return (
                            <option
                              selected={state[input.id] == option.value}
                              value={option.value}
                            >
                              {option.name}
                            </option>
                          );
                        })}
                      </select>
                    </>
                  ) : input.type == "range" ? (
                    <>
                      <label>{input.name}</label>
                      <Slider
                        allowCross={false}
                        onChange={(e) => handleChange(input.id, e)}
                        range
                        value={[
                          state[input.id].minValue,
                          state[input.id].maxValue,
                        ]}
                        step={null}
                        marks={{
                          1000000: 10,
                          24250000: 242.5,
                          49500000: 495,
                          74750000: 747.5,
                          100000000: 1000,
                        }}
                        min={1000000}
                        max={100000000}
                      />
                    </>
                  ) : (
                    <>
                      <label>{input.name}</label>
                      <input
                        type={input.type}
                        checked={state[input.id]}
                        name={input.id}
                        onChange={(e) => handleSelect(e)}
                        className={styles.inputType}
                      />
                    </>
                  )}
                </div>
              );
            })}
            <button onClick={handleApplyChanges} className={styles.btn}>
              Apply
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBox;
