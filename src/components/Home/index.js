import React, { useEffect } from "react";
import styles from "./index.module.scss";
import Space from "../Space";
import rocket from "../../assets/rocket.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { isMobileDevice } from "../../utils";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    if (isMobileDevice) {
      gsap.fromTo(
        `#rocket`,
        { bottom: "-20%", left: "-30%" },
        {
          bottom: "5%",
          left: "0%",
          ease: "power2.Out",
          scrollTrigger: {
            trigger: `#home`,
            start: "50% top",
            end: "120% top",
            scrub: 1.25,
            id: "scrub",
          },
        }
      );
    } else {
      gsap.fromTo(
        `#rocket`,
        { bottom: "-40%", left: "-10%" },
        {
          bottom: "-5%",
          left: "30%",
          ease: "power2.Out",
          scrollTrigger: {
            trigger: `#home`,
            start: "top top",
            end: "70% top",
            scrub: 1.25,
            id: "scrub",
          },
        }
      );
    }
  }, [isMobileDevice]);

  return (
    <div id="home" className={styles.homeWrapper}>
      <div id="rocket" className={styles.rocketImage}>
        <img src={rocket} className={styles.rocket} />
      </div>
      <div className={styles.banner}>
        <div className={styles.title}>
          Unleashing the Future of Space Exploration
        </div>
        <div className={styles.description}>
          Welcome to SpaceX – Where Innovation Soars Beyond Earth's Limits. Join
          us on a journey to push the boundaries of possibility, from pioneering
          rocket launches to shaping the future of interplanetary travel.
          Explore the cosmos with cutting-edge technology, sustainable space
          travel, and a commitment to making humanity a multi-planetary species.
          Discover the extraordinary. Welcome to the future of space
          exploration.
        </div>
      </div>
      <Space />
    </div>
  );
};

export default Home;
