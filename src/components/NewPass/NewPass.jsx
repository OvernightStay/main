import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NewPass.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/show__password.png";

export default function NewPass() {
  return (
    <Row className={styles.new__row}>
      <Col className={styles.new__col}>
        <img className={styles.new__logo} src={logo} alt="" />
        <p className={styles.new__text}>Придумайте новый пароль</p>
        <div className={styles.new__input}>
          <div className={styles.new__input_field_wrapper}>
            <input
              className={styles.new__input_field}
              type="text"
              placeholder="Введите новый пароль"
            />
            <img className={styles.new__show} src={show} alt="" />
          </div>
          <div className={styles.new__input_field_wrapper}>
            <input
              className={styles.new__input_field}
              type="text"
              placeholder="Введите новый пароль"
            />
            <img className={styles.new__show} src={show} alt="" />
          </div>
        </div>
        <button className={styles.new__button}>Восстановить пароль</button>
      </Col>
    </Row>
  );
}
