import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Page} from "../../components/page/Page";
import content from 'src/resources/maandprogrammaDownload.json'

interface Props {
    onDownloadFile: (title: string) => void;
    errorMessage: string;
}

export const MaandprogrammaDownload = (props: Props) => {
    const afdelingen = ['sloebers', 'bengels', 'rakkers', 'toppers', 'kerels', 'aspi']
    return (
        <>
            <Page title={'Maandprogramma'} content={content}/>
            {afdelingen.map(x => {
                return (
                    <Row className={'d-flex justify-content-center pt-2'}>
                        <Col lg={8}>
                            <button className={'brief-button'} onClick={() => props.onDownloadFile(x)}>
                                <FontAwesomeIcon
                                    icon={faArrowRight}/> {x}</button>
                        </Col>
                    </Row>
                )
            })}
            {props.errorMessage && (
                <Row className={'d-flex justify-content-center pt-2'}>
                    <Col lg={8}>
                        <h5 className={'text-danger'}> Maandprogramma is niet beschikbaar voor uw afdeling</h5>
                    </Col>
                </Row>

            )
            }
        </>
    )
}