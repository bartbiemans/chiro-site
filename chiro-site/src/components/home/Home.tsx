import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Announcement} from "../announcement/Announcement";

export const Home = () => {
    return (
        <>
        <Row>
            <Col className={'justify-content-center'} >
                <h3 className={'text-center pt-2 text-success'}>De beste chiro uit merksem en omstreken!</h3>
            </Col>
        </Row>
            <Row>
                <Col className={'justify-content-center'} >
                        <Announcement/>
                </Col>
            </Row>
            </>
    )
}