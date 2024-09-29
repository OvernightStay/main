import React from "react";
import { useNavigate } from "react-router-dom"; // Исправлен импорт
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./RegForm.module.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.png";
import show from "../../assets/show__password.png";

export default function RegForm() {
  const navigate = useNavigate(); // Исправлен импорт
  const handleClick = () => {
    navigate("/finish-registration");
  };

  return (
    <Row className={styles.form__row}>
      <Col className={styles.form__col}>
        <img className={styles.form__logo} src={logo} alt="" />
        <p className={styles.discover}>
          Для создания вашего аккаунта необходимо ввести все данные со знаком *
        </p>
        <ul className={styles.form__menu}>
          <li className={styles.form__col_list}>
            <div className={styles.form__input}>
              <input className={styles.input} type="text" placeholder="Имя*" />
            </div>
            <div className={styles.form__input}>
              <input
                className={styles.input}
                type="text"
                placeholder="Логин*"
              />
            </div>
          </li>
          <li className={styles.form__col_list}>
            <div className={styles.form__input}>
              <input
                className={styles.input}
                type="text"
                placeholder="Фамилия*"
              />
            </div>
            <div className={styles.form__input}>
              <input
                className={styles.input}
                type="text"
                placeholder="Пароль*"
              />
              <img src={show} alt="" />
            </div>
          </li>
          <li className={styles.form__col_list}>
            <div className={styles.form__input}>
              <input
                className={styles.input}
                type="text"
                placeholder="Телефон*"
              />
            </div>
            <div className={styles.form__input}>
              <input
                className={styles.input}
                type="text"
                placeholder="Повторите пароль*"
              />
              <img src={show} alt="" />
            </div>
          </li>
          <li className={styles.form__col_list}>
            <div className={styles.form__input}>
              <input
                className={styles.input}
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div className={styles.form__checkbox}>
              <input
                className={styles.form__checkbox_input}
                type="checkbox"
                name=""
                id=""
              />
              <p>
                Я ознакомлен(а) с{" "}
                <span className={styles.form__checkbox_text}>Политикой</span>{" "}
                <br />{" "}
                <span className={styles.form__checkbox_text}>
                  конфиденциальности
                </span>{" "}
              </p>
            </div>
          </li>
        </ul>
        <button onClick={handleClick} className={styles.form__button}>
          Зарегистрироваться
        </button>
      </Col>
    </Row>
  );
}
