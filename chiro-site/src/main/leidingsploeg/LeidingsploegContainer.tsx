import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import leiding from '../../resources/leiding.json'
import {Leider} from "./Leider";
import {Page} from "../../components/page/Page";
import content from '../../resources/leidingsploeg.json'

export const LeidingsploegContainer = () => {

    const renderAfdeling = (title:string,leiding:{image:string,name:string,bio:string,gsm:string,mail:string}[]) => {
        return (
            <>
                <Row className={'d-flex justify-content-left pt-5'}>
                    <Col className={'d-flex justify-content-center pb-4'} lg={4}>
                        <h3 className={'text-success'}>{title}</h3>
                    </Col>

                </Row>
                <Row className={'d-flex justify-content-left pt-5 pl-5'}>
                {leiding.map((leider, index) => {
                    return (
                        <Col className={'d-flex justify-content-center pb-4'} lg={4} key={index}>
                            <Leider bio={leider.bio} image={leider.image} name={leider.name} gsm={leider.gsm}
                                    mail={leider.mail}/>
                        </Col>
                    )
                })}
                </Row>
            </>
        )
    }

    return (
        <>
            <Page title={'De leidingsploeg'} content={content}/>
                {renderAfdeling('Sloeber leiding :',leiding.sloebers)}
                {renderAfdeling('Bengel leiding :',leiding.sloebers)}
        </>
    )
}