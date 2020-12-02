import React from "react";
import {Page} from "src/components/page/Page";
import content from 'src/resources/maandprogrammaUploader.json'
import {Col, Form, Row} from "react-bootstrap";

interface Props {
    onMaandChange: (maand: string) => void;
    onAfdelingChange: (afdeling: string) => void;
    onFileUpload: (files: FileList | null) => void;
    maand: string;
    afdeling:string;
}

export const MaandprogrammaUpload = (props: Props) => {
    const maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    const afdelingen = ['sloebers', 'bengels', 'rakkers', 'toppers', 'kerels', 'aspi'];
    return (
        <>
            <Page content={content} title={'Upload maandprogramma'}/>
            <Form>
                <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                    <Col lg={8}>
                        {maanden.map(maand => {
                            return (<Form.Check type={'radio'} inline label={maand} checked={maand === props.maand} onChange={() => props.onMaandChange(maand)}/>)
                        })}
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                    <Col lg={8}>
                        {afdelingen.map(afdeling => {
                            return (<Form.Check type={'radio'} inline label={afdeling} checked={afdeling === props.afdeling} onChange={() => props.onAfdelingChange(afdeling)}/>)
                        })}
                    </Col>
                </Row>
            </Form>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <input type={'file'} accept={'.pdf'} onChange={(event) => props.onFileUpload(event.target.files)}/>
                </Col>
            </Row>
        </>
    )
}