import React, { useState, useEffect } from "react";
import styles from "./SplashScreen.module.css";
import logo from "../../assets/logo_img.png";
import yellow__elem from "../../assets/yellow__elem.png";
import { Container } from "react-bootstrap";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logoTimeout = setTimeout(() => {
      setProgress(1);
    }, 2000);

    const yellowElemTimeout = setTimeout(() => {
      setProgress(2);
    }, 4000);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(yellowElemTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <Container fluid className={styles.splashScreen}>
      <img
        className={`${styles.logo} ${progress > 1 ? styles.hidden : ""}`}
        src={logo}
        alt="logo"
      />
      <img
        className={`${styles.yellow__elem} ${
          progress > 2 ? styles.hidden : ""
        }`}
        src={yellow__elem}
        alt=""
      />
    </Container>
  );
};

export default SplashScreen;
