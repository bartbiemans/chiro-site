import {Col, Row} from "react-bootstrap";
import {downloadFile} from "../../services/FileDownloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Page} from "../../components/page/Page";
import content from 'src/resources/maandprogrammaDownload.json'

export const MaandprogrammaDownload = () => {
    const afdelingen = ['sloebers', 'bengels', 'rakkers', 'toppers', 'kerels', 'aspi']
    return (
        <>
            <Page title={'Maandprogramma'} content={content}/>
            {afdelingen.map(x => {
                return (
                    <Row className={'d-flex justify-content-center pt-2'}>
                        <Col lg={8}>
                            <button className={'brief-button'} onClick={() => downloadFile(x, true)}><FontAwesomeIcon
                                icon={faArrowRight}/> {x}</button>
                        </Col>
                    </Row>
                )
            })}
        </>
    )
}