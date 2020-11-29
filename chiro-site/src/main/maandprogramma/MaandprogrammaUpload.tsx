import React from "react";
import {Page} from "src/components/page/Page";
import {uploadFile} from "../../services/MaandProgrammaUploader";
import content from 'src/resources/maandprogrammaUploader.json'
import {Col, Row} from "react-bootstrap";

export const MaandprogrammaUpload = () => {
    return (
        <>
            <Page content={content} title={'Upload maandprogramma'}/>
            <Row className={'d-flex justify-content-center pt-2'}>
                <Col lg={8}>
                    <input type={'file'} onChange={uploadFile}/>
                </Col>
            </Row>
        </>
    )
}