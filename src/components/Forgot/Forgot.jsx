import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Forgot.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function Forgot() {
  return (
    <Row className={styles.forgot__row}>
      <Col className={styles.forgot__col}>
        <img className={styles.forgot__logo} src={logo} alt="" />
        <p className={styles.forgot__text}>Восстановление пароля</p>
        <div className={styles.forgot__input}>
          <p className={styles.forgot__input_text}>
            Введите адрес Вашей электронной почты, <br /> на него мы вышлем код
            для сброса пароля
          </p>
          <input
            className={styles.forgot__input_field}
            type="text"
            placeholder="Адрес эл. почты"
          />
        </div>
        <button className={styles.forgot__button}>Получить код</button>
      </Col>
    </Row>
  );
}
