import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import gsap from "gsap";

const Loading = () => {
  const { loadingScreen } = useContext(SearchContext);
  const [animationEnded, setAnimationEnded] = useState(false);
  useEffect(() => {
    if (!loadingScreen && animationEnded) {
      gsap.to("#loading", {
        opacity: 0,
        onComplete: () => {
          document.body.style.overflow = "auto";
          document.getElementById("loading").style.display = "none";
        },
      });
    }
  }, [loadingScreen, animationEnded]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    gsap.fromTo(
      "#LoadingTitle",
      {
        translateY: "100%",
      },
      {
        translateY: "0%",
        delay: 0.5,
        duration: 0.5,
        ease: "power3.inOut",
      }
    );
    gsap.fromTo(
      "#xLetter",
      {
        opacity: 0,
        scale: 2,
      },
      {
        opacity: 1,
        scale: 1.5,
        delay: 1.5,
        ease: "power3.inOut",
        onComplete: () => {
          setTimeout(() => {
            setAnimationEnded(true);
          }, 500);
        },
      }
    );
  }, []);
  return (
    <div id="loading" className={styles.loadingWrapper}>
      <div className={styles.logo}>
        <div id="LoadingTitle" className={styles.title}>
          Space
          <div id="xLetter" className={styles.xLetter}>
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
