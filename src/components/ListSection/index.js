import React, { useContext, useState } from "react";
import styles from "./index.module.scss";
import SearchBox from "../SearchBar";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import RocketSection from "../RocketSection";

const dataArr = [
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
  {
    name: "Rocket",
  },
];

const ListSection = () => {
  const { data } = useContext(SearchContext);
  const [selectedRocket, setSelectedRocket] = useState(null);
  const handleRocketSelect = (data) => {
    // document.body.style.overflow = "hidden";
    setSelectedRocket({ ...data });
  };

  return (
    <div className={styles.listSectionWrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          Skyward Squadron: Our Stellar Rockets 🚀
        </div>
        <SearchBox />
      </div>
      <div className={styles.listGridWrapper}>
        <div className={styles.listGrid}>
          {data &&
            data.map((data, index) => {
              return (
                <div
                  onClick={() => handleRocketSelect(data)}
                  className={styles.rocketBox}
                >
                  <img
                    src={data.flickr_images[0]}
                    className={styles.rocketImage}
                  />
                  <div className={styles.rocketName}>{data.rocket_name}</div>
                  <div className={styles.country}>{data.country}</div>
                </div>
              );
            })}
        </div>
      </div>
      {selectedRocket && (
        <RocketSection
          selectedRocket={selectedRocket}
          setSelectedRocket={setSelectedRocket}
        />
      )}
    </div>
  );
};

export default ListSection;
