import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Confirm.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function Confirm() {
  return (
    <Row className={styles.confirm__row}>
      <Col className={styles.confirm__col}>
        <img className={styles.confirm__logo} src={logo} alt="" />
        <p className={styles.confirm__text}>Восстановление пароля</p>
        <div className={styles.confirm__input}>
          <p className={styles.confirm__input_text}>
            Ведите 6-значный код, который мы отправили на почту
          </p>
          <div className={styles.confirm__input_field_wrapper}>
            <input className={styles.confirm__input_field} type="text" />
            <div className={styles.confirm__input_lines_wrapper}>
              <div className={styles.confirm__input_lines}></div>
              <div className={styles.confirm__input_lines}></div>
              <div className={styles.confirm__input_lines}></div>
              <div className={styles.confirm__input_lines}></div>
              <div className={styles.confirm__input_lines}></div>
              <div className={styles.confirm__input_lines}></div>
            </div>
          </div>
        </div>
        <button className={styles.confirm__button}>Получить код</button>
      </Col>
    </Row>
  );
}
