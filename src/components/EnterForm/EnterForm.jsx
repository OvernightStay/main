import "bootstrap/dist/css/bootstrap.min.css";
import styes from "./EnterForm.module.css";

export default function EnterForm() {
  return (
    <div className={styes.enterFormBody}>
      <div className={styes.enterFormInputsBlock}>
        <input
          className={styes.enterFormInputs}
          type="text"
          placeholder="ВВЕДИТЕ ЛОГИН"
        />
        <input
          className={styes.enterFormInputs}
          type="text"
          placeholder="ВВЕДИТЕ ПАРОЛЬ"
        />
        <div className={styes.enterFormLinksBlock}>
          <a href="#">регистрация</a>
          <a href="#">забыли пароль?</a>
        </div>
      </div>
      <div className={styes.enterFormButtonBlock}>
        <button className={styes.enterFormButton}>Войти</button>
      </div>
    </div>
  );
}
