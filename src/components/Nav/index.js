import React, { useEffect } from "react";
import styles from "./index.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  useEffect(() => {
    gsap.fromTo(
      `#nav`,
      { backgroundColor: "#b6bbc4" },
      {
        backgroundColor: "#000",
        ease: "power2.Out",
        scrollTrigger: {
          trigger: `#home`,
          start: "top top",
          end: "20% top",
          scrub: 1.25,
          id: "scrub",
        },
      }
    );
    gsap.fromTo(
      `#title`,
      { color: "#000" },
      {
        color: "#fff",
        ease: "power2.Out",
        scrollTrigger: {
          trigger: `#home`,
          start: "top top",
          end: "20% top",
          scrub: 1.25,
          id: "scrub",
        },
      }
    );
  }, []);

  return (
    <div id="nav" className={styles.navWrapper}>
      <div id="title" className={styles.logo}>
        SpaceX
      </div>
    </div>
  );
};

export default Nav;
