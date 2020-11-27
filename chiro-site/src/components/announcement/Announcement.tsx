import {Card, Col, Row} from "react-bootstrap";
import React from "react";

export const Announcement = () => {
    return (
       <Row className={'announcement-card m-1'}>
           <Col className={'text-center'}>
               <h5> Wegens corona stoppen we ermee</h5>
               <p>Het is meer dan genoeg geweest voor de leiding</p>
           </Col>
       </Row>
    )
}