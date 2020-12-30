import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import leiding from '../../resources/leiding.json'
import {Leider} from "./Leider";
import {Page} from "../../components/page/Page";
import content from '../../resources/leidingsploeg.json'
import Image from "react-bootstrap/Image";

export const LeidingsploegContainer = () => {

    const renderAfdeling = (title:string,leiding:{image:string,name:string,gsm:string,mail:string}[]) => {
        return (
            <>
                <Row className={'d-flex justify-content-left pt-5'}>
                    <Col className={'d-flex justify-content-center pb-4'} lg={4}>
                        <h3 className={'text-success'}>{title}</h3>
                    </Col>

                </Row>
                <Row className={'d-flex justify-content-left pt-5'}>
                {leiding.map((leider, index) => {
                    return (
                        <Col className={'d-flex justify-content-center pb-4'} lg={4} key={index}>
                            <Leider image={leider.image} name={leider.name} gsm={leider.gsm}
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
            <div>
                <Image src={'../../../../leidingsfoto.jpg'} fluid style={{width:'100%'}}/>
            </div>
            <Page title={'De leidingsploeg'} content={content}/>
                {renderAfdeling('Sloeber leiding :',leiding.sloebers)}
                {renderAfdeling('Bengel leiding :',leiding.bengels)}
                {renderAfdeling('Rakker leiding :',leiding.rakkers)}
                {renderAfdeling('Topper leiding :',leiding.toppers)}
                {renderAfdeling('Kerel leiding :',leiding.kerels)}
                {renderAfdeling('Aspiranten leiding :',leiding.aspiranten)}
                {renderAfdeling('Groepsleiding :',leiding.groepsleiding)}
        </>
    )
}