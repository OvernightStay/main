import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./ForgotForm.module.css";
import Forgot from "../Forgot/Forgot";
import cat from "../../assets/cat.png";

export default function RegistrationForm() {
  return (
    <Container className={styles.registration__container}>
      <Forgot />
      <Row>
        <Col className={styles.registration__cat_wrapper}>
          <img className={styles.registration__cat} src={cat} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
