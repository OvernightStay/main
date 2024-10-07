'use client'
import { Col, Container, Row } from "reactstrap";
import css from './mainPage.module.css'
import introPage from "./text.tsx";
import {useState} from "react";
import React from "react";
import { round, random } from "mathjs";

export default function MainPage(){
    const [textNumber, setTextnumber] = useState(0);
    return (
        <Container className={css.registration_container}>
            {textNumber==5?<Col className={css.catSmiling}></Col> : <Col className={textNumber>5? css.verticalCat : css.cat}></Col>}
            <Col className={css.settings}/>
                <Col className={css.bubble}>
                    <Row className={css.bubble1}></Row>
                    <Row className={css.textDiv}>
                        {introPage[textNumber].split("<br/>").map(introPageElement => (<p className={css.miniTextDiv}>{introPageElement.split("<b>").map((newEl,index) => (<p className={css.introPageElement} key={round(random(1,10000))}>{index%2==1? <b className={css.introPageElement}>{newEl}</b>:newEl}</p>))}</p>))}
                    </Row>
                    <Row className={css.nextPage} onClick={()=>setTextnumber(textNumber+1)}>
                    </Row>
                </Col>
                <Col className={css.statusDiv}><p className={css.status}>Статус</p></Col>
        </Container>
    )
}