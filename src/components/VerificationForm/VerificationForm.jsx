import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./VerificationForm.module.css";
import Form from "../Form/Form";
import cat from "../../assets/cat.png";

export default function VerificationForm() {
  return (
    <Container className={styles.verification__container}>
      <Form />
      <Row>
        <Col className={styles.verification__cat_wrapper}>
          <img className={styles.verification__cat} src={cat} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
