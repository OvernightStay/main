import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./ChoiseComponent.module.css";
import Choise from "../Choise/Choise";
import cat from "../../assets/cat.png";
import female from "../../assets/female_char.png";
import male from "../../assets/male_char.png";

export default function ChoiseComponent() {
  return (
    <Container className={styles.choiseComponent__container}>
      <button className={styles.settings}></button>
      <Row className={styles.female__row}>
        <Col>
          <img src={female} alt="" />
        </Col>
      </Row>
      <Choise />
      <Row className={styles.male__row}>
        <Col>
          <img src={male} alt="" />
        </Col>
      </Row>
      <Row>
        <Col className={styles.choiseComponent__cat_wrapper}>
          <img className={styles.choiseComponent__cat} src={cat} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
