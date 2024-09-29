import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./RegistrationForm.module.css";
import RegForm from "../RegForm/RegForm";
import cat from "../../assets/cat.png";

export default function RegistrationForm() {
  return (
    <Container className={styles.registration__container}>
      <RegForm />
      <Row>
        <Col className={styles.registration__cat_wrapper}>
          <img className={styles.registration__cat} src={cat} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
