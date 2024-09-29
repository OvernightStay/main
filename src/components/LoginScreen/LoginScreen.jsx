import React from "react";
import styles from "./LoginScreen.module.css";

const LoginScreen = () => {
  return (
    <div className={styles.loginScreen}>
      <form className={styles.loginForm}>
        <input type="text" placeholder="Логин" autoComplete="username" />
        <input
          type="password"
          placeholder="Пароль"
          autoComplete="current-password"
        />
        <button type="submit">Войти</button>
        <button type="button">Регистрация</button>
        <button type="button">Восстановить пароль</button>
      </form>
    </div>
  );
};

export default LoginScreen;
