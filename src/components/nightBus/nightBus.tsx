import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import css from './nightBus.module.css';
import introPage from "./text.tsx";
import { random, round } from "mathjs";

export default function NightBus(){
    const [textNumber, setTextnumber] = useState(0);
    const [bubblePosition, setBubblePosition] = useState(0);
    const [backgroundPosition, setBackgroundPosition] = useState(0);
    useEffect(() => {if(textNumber==1 || textNumber==4 || textNumber==7 || textNumber==11 || textNumber==14){setBubblePosition(1)}else{setBubblePosition(0)}},[textNumber])
    return (
        <Container className={textNumber==5?  css.registration_container1 : (textNumber==6||textNumber==7||textNumber==8||textNumber==11||textNumber==14? css.registration_container2: (textNumber==9||textNumber==10?css.registration_container3:(textNumber==12||textNumber==13?css.registration_container4: css.registration_container)))}>
            {textNumber==3?<Col className={css.catSmiling}></Col> : <Col className={css.cat}></Col>}
            <Col className={css.nastavnik}></Col>
            <Col className={css.settings}/>
                <Col className={css.bubble}>
                    {bubblePosition==0?<Row className={css.bubble1}></Row>: <Row className={css.bubble2}></Row>}
                    <Row className={css.textDiv}>
                        {introPage[textNumber].split("<br/>").map(introPageElement => (<p className={css.miniTextDiv}>{ (<p className={css.introPageElement} key={round(random(1,10000))}>{introPageElement.split("<b>").map((newEl,index) =>(index%2==1? <b className={css.introPageElementBold}>{newEl}</b>:newEl))}</p>)}</p>))}
                    </Row>
                    <Row className={css.nextPage} onClick={()=>setTextnumber(textNumber+1)}>
                    </Row>
                </Col>
                <Col className={css.statusDiv}><p className={css.status}>Статус</p></Col>
        </Container>
    )
}