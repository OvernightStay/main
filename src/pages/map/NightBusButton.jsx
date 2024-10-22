/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function NightBusButton({ type, navigate }) {
  const navigation = useNavigate();

  function handleNavigate() {
    navigation(`/${navigate}`);
  }
  return (
    <button
      className={`${s.point} ${s.nightBus} ${
        type ? s.nightBusActive : s.nightBusInactive
      }`}
      onClick={handleNavigate}
    ></button>
  );
}
