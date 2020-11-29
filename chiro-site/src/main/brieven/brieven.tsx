import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import {Page} from "src/components/page/Page"
import content from 'src/resources/Brieven.json'
import {downloadFile} from "../../services/FileDownloader";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Col, Row } from "react-bootstrap";


const brieven: string[] = ['test.pdf','7015_binaryContent.pdf']

export const Brieven = () => {
    return (
        <>
            <Page content={content} title={'Brieven'}/>
            {brieven.map(x => {
                return(
                    <Row className={'d-flex justify-content-center pt-2'}>
                        <Col lg={8}>
                            <button className={'brief-button'} onClick={() =>downloadFile(x,false)}><FontAwesomeIcon icon={faArrowRight}/>  {x}</button>
                        </Col>
                    </Row>
                )})}
        </>
    )
}