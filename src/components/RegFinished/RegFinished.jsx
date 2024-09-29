import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./RegFinished.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import cat_status from "../../assets/cat_status.png";

export default function RegFinished() {
  return (
    <Row className={styles.finish__row}>
      <Col className={styles.finish__col}>
        <img className={styles.finish__logo} src={logo} alt="" />
        <img src={cat_status} alt="" />
        <p className={styles.finish__text}>
          Поздравляем , Вы успешно <br /> зарегистрировались !
        </p>
        <button className={styles.finish__button}>Главная</button>
      </Col>
    </Row>
  );
}
