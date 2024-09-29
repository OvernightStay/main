import React, { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";
import { Col, Container, Row } from "react-bootstrap";
import game__for_staff from "../../assets/game__for_staff.png";
import tree from "../../assets/tree.png";
import bush from "../../assets/bush.png";
import big_bush_right from "../../assets/big_bush_right.png";
import bush__right from "../../assets/bush__right.png";
import home__roof from "../../assets/home__roof.png";
import home_footer from "../../assets/home_footer.png";
import home__dore from "../../assets/home__dore.png";
import home__window_left from "../../assets/home__window_left.png";
import home__window_right from "../../assets/home__window_right.png";
import home__smoke from "../../assets/home__smoke.png";
import window__with_light_left from "../../assets/window__with_light_left.png";
import window__with_light_right from "../../assets/window__with_light_right.png";
import window_roof_middle from "../../assets/window_roof_middle.png";
import window_roof_right from "../../assets/window_roof_right.png";
import window_roof_left from "../../assets/window_roof_left.png";
import window__foor_with_light_right from "../../assets/window__foor_with_light_right.png";
import window__foor_with_light_left from "../../assets/window__foor_with_light_left.png";
import window__foor_with_light_middle from "../../assets/window__foor_with_light_middle.png";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 58.8); // Увеличиваем прогресс каждые 58.8 мс (примерно 1% каждые 58.8 мс)

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className={styles.loadingScreen__fluid}>
      <Container className={styles.loadingScreen}>
        <Row className={styles.logo__row}>
          <Col className={styles.logo__col}>
            <img
              className={`${styles.game__for_staff} ${
                progress > 0 ? styles.fadeIn : styles.hidden
              }`}
              src={game__for_staff}
              alt=""
            />
          </Col>
        </Row>
        <Container>
          <Row className={styles.home__row}>
            <Col className={styles.home__col_left}>
              <img
                className={`${styles.home__tree} ${
                  progress > 40 ? styles.fadeIn : styles.hidden
                }`}
                src={tree}
                alt=""
              />
              <img
                className={`${styles.home__bush} ${
                  progress > 5 ? styles.fadeIn : styles.hidden
                }`}
                src={bush}
                alt=""
              />
            </Col>
            <Col className={styles.home__col_center}>
              <img
                className={`${styles.home__smoke} ${
                  progress > 90 ? styles.fadeIn : styles.hidden
                }`}
                src={home__smoke}
                alt=""
              />
              <img
                className={`${styles.home__roof} ${
                  progress > 35 ? styles.fadeIn : styles.hidden
                }`}
                src={home__roof}
                alt=""
              />
              <img
                className={`${styles.window_roof_left} ${
                  progress > 70 ? styles.fadeIn : styles.hidden
                }`}
                src={window_roof_left}
                alt=""
              />
              <img
                className={`${styles.home__window_left} ${
                  progress > 65 ? styles.fadeIn : styles.hidden
                }`}
                src={home__window_left}
                alt=""
              />
              <img
                className={`${styles.window__with_light_left} ${
                  progress > 85 ? styles.fadeIn : styles.hidden
                }`}
                src={window__with_light_left}
                alt=""
              />
              <img
                className={`${styles.window__foor_with_light_left} ${
                  progress > 95 ? styles.fadeIn : styles.hidden
                }`}
                src={window__foor_with_light_left}
                alt=""
              />
              <img
                className={`${styles.home__dore} ${
                  progress > 30 ? styles.fadeIn : styles.hidden
                }`}
                src={home__dore}
                alt=""
              />
              <img
                className={`${styles.window_roof_middle} ${
                  progress > 75 ? styles.fadeIn : styles.hidden
                }`}
                src={window_roof_middle}
                alt=""
              />
              <img
                className={`${styles.window__foor_with_light_middle} ${
                  progress > 90 ? styles.fadeIn : styles.hidden
                }`}
                src={window__foor_with_light_middle}
                alt=""
              />
              <img
                className={`${styles.home__window_right} ${
                  progress > 60 ? styles.fadeIn : styles.hidden
                }`}
                src={home__window_right}
                alt=""
              />
              <img
                className={`${styles.window__foor_with_light_right} ${
                  progress > 85 ? styles.fadeIn : styles.hidden
                }`}
                src={window__foor_with_light_right}
                alt=""
              />
              <img
                className={`${styles.window_roof_right} ${
                  progress > 80 ? styles.fadeIn : styles.hidden
                }`}
                src={window_roof_right}
                alt=""
              />
              <img
                className={`${styles.window__with_light_right} ${
                  progress > 80 ? styles.fadeIn : styles.hidden
                }`}
                src={window__with_light_right}
                alt=""
              />
              <img
                className={`${styles.home__footer} ${
                  progress > 25 ? styles.fadeIn : styles.hidden
                }`}
                src={home_footer}
                alt=""
              />
            </Col>
            <Col className={styles.home__col_right}>
              <img
                className={`${styles.big_bush_right} ${
                  progress > 20 ? styles.fadeIn : styles.hidden
                }`}
                src={big_bush_right}
                alt=""
              />
              <img
                className={`${styles.bush__right} ${
                  progress > 15 ? styles.fadeIn : styles.hidden
                }`}
                src={bush__right}
                alt=""
              />
            </Col>
          </Row>
        </Container>
        <Container className={styles.progress__container}>
          <Row className={styles.line__row}>
            <Col className={styles.line}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              ></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default LoadingScreen;
