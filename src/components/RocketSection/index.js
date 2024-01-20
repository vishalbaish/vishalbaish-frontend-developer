import React, { useEffect, useRef } from "react";
import styles from "./index.module.scss";
import closeBtn from "../../assets/cross.png";
import gsap from "gsap";

const RocketNumericInfo = [
  {
    name: "Diameter",
    id: "diameter",
    value: "meters",
    itemValue: "m",
  },
  {
    name: "Mass",
    id: "mass",
    value: "kg",
    itemValue: "Kg",
  },
  {
    name: "Height",
    id: "height",
    value: "meters",
    itemValue: "m",
  },
];

const RocketSection = ({ selectedRocket, setSelectedRocket }) => {
  const handleClose = () => {
    setSelectedRocket(null);
  };

  useEffect(() => {
    gsap.fromTo(
      `.${styles.rocketImg}`,
      {
        transform: "scale(0",
        opacity: 0,
      },
      {
        opacity: 1,
        transform: "scale(1)",
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      `.${styles.leftSection}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className={styles.rocketSection}>
      <div onClick={handleClose} className={styles.closeBtn}>
        <img src={closeBtn} className={styles.closeImg} />
      </div>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <div className={styles.title}>{selectedRocket.rocket_name}</div>
          <div className={styles.numericDetails}>
            {RocketNumericInfo.map((item) => {
              return (
                <div className={styles.itemWrapper}>
                  <div className={styles.itemValue}>
                    {selectedRocket[item.id][item.value]}
                    <div
                      className={styles.itemValueInfo}
                    >{`(${item.itemValue})`}</div>
                  </div>
                  <div className={styles.itemName}>{item.name}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.description}>{selectedRocket.description}</div>
        </div>
        <img
          src={selectedRocket.flickr_images[0]}
          className={styles.rocketImg}
        />
      </div>
      <div className={styles.rocketDetails}></div>
    </div>
  );
};

export default RocketSection;
