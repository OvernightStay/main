import React, { useState, useEffect } from "react";
import SplashScreen from "../SplashScreen/SplashScreen";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { Routes, Route } from "react-router-dom";
import VerificationForm from "../VerificationForm/VerificationForm";
import RegFinished from "../RegFinished/RegFinished";
import ForgotForm from "../ForgotForm/ForgotForm";
import { Container } from "react-bootstrap";
import styles from "./GameLayout.module.css";

const GameLayout = () => {
  const [currentScreen, setCurrentScreen] = useState("splash");

  const handleSplashComplete = () => {
    setCurrentScreen("loading");
  };

  useEffect(() => {
    if (currentScreen === "loading") {
      const loadingTimeout = setTimeout(() => {
        setCurrentScreen("login");
      }, 6000); // Время LoadingScreen (100% за 5880 мс)

      return () => clearTimeout(loadingTimeout);
    }
  }, [currentScreen]);

  return (
    <Container fluid className={styles.game__container}>
      {currentScreen === "splash" && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      {currentScreen === "loading" && <LoadingScreen />}
      {currentScreen === "login" && (
        <Routes>
          <Route path="/" exact element={<VerificationForm />} />
          <Route path="/reg" element={<RegistrationForm />} />
          <Route path="/forgot" element={<ForgotForm />} />
          <Route path="/finish-registration" element={<RegFinished />} />
        </Routes>
      )}
    </Container>
  );
};

export default GameLayout;
