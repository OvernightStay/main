import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import css from './psoxolog.module.css';
import introPage from "./text.tsx";
import { random, round } from "mathjs";

export default function Psixolog(){
    const [textNumber, setTextnumber] = useState(0);
    const [bubblePosition, setBubblePosition] = useState(0);
    const [answerPosition, setanswerPosition] = useState(0);
    useEffect(() => {if(introPage[textNumber].includes("<var>")){setanswerPosition(1)}; if(textNumber==4 || textNumber==6 || textNumber==8 || textNumber==11 || textNumber==13 || textNumber==15){setBubblePosition(1)}else{setBubblePosition(0)}},[textNumber])
    return (
        <Container className={textNumber==9?  css.registration_container1 : (textNumber==13? css.registration_container2: css.registration_container)}>
            {textNumber<3 || textNumber==9|| textNumber==16?<Col className={css.cat}></Col> : ''}
            <Col className={css.nastavnik}></Col>
            {textNumber==3 || textNumber==4 || textNumber==5 || textNumber==6 || textNumber==7 || textNumber==8 || textNumber==10 || textNumber==11 || textNumber==12 || textNumber==13 || textNumber==14 || textNumber==15? <Col className={css.homelessLeft}></Col> : (textNumber==9? <Col className={css.woman}></Col> : (textNumber==0 || textNumber==1 || textNumber==2 || textNumber==16?<Col className={css.homelessMiddle}></Col> : ''))}
            <Col className={css.settings}/>
            {textNumber>0?<Col className={css.door}/>: ''}
            {textNumber>0?<Col className={css.home}/>: ''}
            <Col className={css.shkala}>
            </Col>
                <Col className={css.bubble}>
                    {bubblePosition==0?<Row className={css.bubble1}></Row>: <Row className={css.bubble2}></Row>}
                    <Row className={css.textDiv}>
                        {introPage[textNumber].split("<br/>").map(introPageElement => (<p className={css.miniTextDiv}>{ (<p className={css.introPageElement} key={round(random(1,10000))}>{introPageElement.split("<b>").map((newEl,index) =>
                        (index%2==1? <b className={css.introPageElementBold}>{newEl.includes("<var>")? <div className={css.divWothCircle}><div className={css.BigCircle} onClick={()=> setanswerPosition(0)}>{answerPosition==1?<div className={css.SmallCircle}></div>:<div className={css.SmallCircleWrong}></div>}</div><p className={css.introPageElement}>{newEl.substring(5,newEl.length)}</p></div>: 
                        (newEl.includes("<var right>")? <div className={css.divWothCircle}><div className={css.BigCircle} onClick={()=> setanswerPosition(0)}>{answerPosition==1?<div className={css.SmallCircle}></div>: <div className={css.SmallCircleRight}></div>}</div><p className={css.introPageElement}>{newEl.substring(11,newEl.length)}</p></div>:newEl)}</b>:
                        (newEl.includes("<var>")? <div className={css.divWothCircle}><div className={css.BigCircle} onClick={()=> setanswerPosition(0)}>{answerPosition==1? <div className={css.SmallCircle}></div> : <div className={css.SmallCircleWrong}></div>}</div><p className={css.introPageElement}>{newEl.substring(5,newEl.length)}</p></div>: 
                        (newEl.includes("<var right>")? <div className={css.divWothCircle}><div className={css.BigCircle} onClick={()=> setanswerPosition(0)}>{answerPosition==1?<div className={css.SmallCircle}></div>:<div className={css.SmallCircleRight}></div>}</div><p className={css.introPageElement}>{newEl.substring(11,newEl.length)}</p></div>:newEl))))}</p>)}</p>))}
                    </Row>
                    <Row className={css.nextPage} onClick={()=>{if(answerPosition==0){setTextnumber(textNumber+1)}}}>
                    </Row>
                </Col>
                <Col className={css.statusDiv}><p className={css.status}>Статус</p></Col>
        </Container>
    )
}