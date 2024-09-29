import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Choise.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import pencil from "../../assets/pencil.png";

export default function NewPass() {
  return (
    <Row className={styles.choise__row}>
      <Col className={styles.choise__col}>
        <img className={styles.choise__logo} src={logo} alt="" />
        <p className={styles.choise__text}>Выбери героя</p>
        <div className={styles.choise__input}>
          <div className={styles.choise__input_field_wrapper}>
            <input
              className={styles.choise__input_field}
              type="text"
              placeholder="Логин"
            />
            <img className={styles.choise__show} src={pencil} alt="" />
          </div>
          <div className={styles.choise_btn_wrapper}>
            <button className={styles.choise_btn}>Женский</button>
            <button className={styles.choise_btn}>Мужской</button>
          </div>
        </div>
        <button className={styles.choise__button}>Начать игру</button>
      </Col>
    </Row>
  );
}
