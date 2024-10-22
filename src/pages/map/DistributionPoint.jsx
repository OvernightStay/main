/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css";

export default function DistributionPoint({ type, navigate }) {
  const navigation = useNavigate();

  function handleNavigate() {
    navigation(`/${navigate}`);
  }

  return (
    <button
      className={`${s.point} ${s.distributionPoint} ${
        type ? s.distributionPointActive : s.distributionPointInactive
      }`}
      onClick={handleNavigate}
    ></button>
  );
}