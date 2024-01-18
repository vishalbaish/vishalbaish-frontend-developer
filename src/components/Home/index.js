import React, { useEffect } from "react";
import styles from "./index.module.scss";
import Space from "../Space";
import rocket from "../../assets/rocket.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      `#rocket`,
      { bottom: "-20rem", left: "-10rem" },
      {
        bottom: "-5rem",
        left: "30%",
        ease: "power2.Out",
        scrollTrigger: {
          trigger: `#home`,
          start: "top top",
          end: "70% top",
          // pin: true,
          scrub: 1,
          id: "scrub",
        },
      }
    );
  }, []);

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
