import React from "react";
import {Page} from "src/components/page/Page";
import {uploadFile} from "../../services/MaandProgrammaUploader";
import content from 'src/resources/maandprogrammaUploader.json'
import {Col, Form, Row} from "react-bootstrap";

export const MaandprogrammaUpload = () => {
    return (
        <>
            <Page content={content} title={'Upload maandprogramma'}/>
            <Form>
                <Form.Check inline label={'januari'} type={'radio'} id={'radio-1'} />
            </Form>
            <Row className={'d-flex justify-content-center pt-2'}>
                <Col lg={8}>
                    <input type={'file'} accept={'.pdf'} onChange={uploadFile}/>
                </Col>
            </Row>
        </>
    )
}