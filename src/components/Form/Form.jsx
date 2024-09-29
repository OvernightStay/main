import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Form.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <Row className={styles.form__row}>
      <Col className={styles.form__col}>
        <img className={styles.form__logo} src={logo} alt="" />
        <input
          className={styles.form__input_log}
          type="text"
          placeholder="Логин"
        />
        <input
          className={styles.form__input_pass}
          type="text"
          placeholder="Пароль"
        />
        <div className={styles.form__col_links}>
          <Link to="/reg">Зарегистрироваться</Link>
          <Link to="/forgot">Забыл пароль</Link>
        </div>
        <button className={styles.form__button}>Войти</button>
      </Col>
    </Row>
  );
}
