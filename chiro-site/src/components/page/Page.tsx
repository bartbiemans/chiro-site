import {Col, Row} from "react-bootstrap";
import React from "react";

interface Props {
    title:string;
    content: { subtitle?: string, body: string, linkText?:{link:string,text:string} }[];
}

export const Page = (props: Props) => {
    return (
        <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
            <Col lg={8}>
                <h3 className={'pt-2 text-success'}><b>{props.title}</b></h3>
                {props.content.map(item => {
                    return (
                        <>
                            {item.subtitle && <h4 className={'pt-4 text-success'}>{item.subtitle}</h4>}
                            <p>{item.body} {item.linkText && <a href={item.linkText.link}>{item.linkText.text}</a>}</p>
                        </>
                    )
                })}
            </Col>
        </Row>
    )
}