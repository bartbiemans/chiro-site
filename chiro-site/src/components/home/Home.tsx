import React from "react";
import {Col, Row} from "react-bootstrap";
import {Announcement} from "../announcement/Announcement";
import Image from "react-bootstrap/Image";

export const Home = () => {
    return (
        <div>
            <div style={{position: 'relative', textAlign: 'center'}}>
                <Image src={'../../../../groepsfoto.jpg'} fluid style={{width: '100%'}}/>
                <h1 className={'text-success d-none d-lg-block'}
                    style={{position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)'}}>Chiro
                    Sint-Jozef jongens merksem</h1>
            </div>
            <Row>
                <Col className={'justify-content-center'}>
                    <h3 className={'text-center pt-2 text-success'}><b>De beste chiro uit Merksem en omstreken!</b>
                    </h3>
                </Col>
            </Row>
            <Row className={'justify-content-center'}>
                <Col lg={8}>
                    <p className={'text-center pt-2'}>Welkom op onze vernieuwe website. Hier kan u alle info
                        terugvinden over onze chiro</p>
                </Col>
            </Row>
            <Row>
                <Col lg={7} sm={10}>
                    <Announcement title={'Nieuwe website'}
                                  body={'Zoals u kan zien is onze site helemaal vernieuwd. Mocht u iets opmerken dat niet goed is, of dat ontbreekt mag u dat altijd laten weten aan een van de leiding.'}
                                  date={new Date(2020,12,30)}/>
                    <Announcement title={'Corona maatregelen'}
                                  body={'Zoals u weet is het leiding geven tijdelijk beperkt door de COVID maatregelen. Concreet betekent dit voor ons dat enkel de ' +
                                  '3 jongste afdelingen chiro hebben. De oudste leden hebben jammer genoeg nog geen chiro. Meer info hierover volgt eens de maatregelen zijn aangepast. '}
                                  date={new Date()}/>
                </Col>
                <Col lg={1}/>
                <Col lg={3} sm={0} className="pt-5 d-none d-lg-block">
                    <iframe title={'facebook'}
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FChiro-Sint-Jozef-Jongens-Merksem-143531585754896%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=2817641565220366"
                            width="500" height="600" style={{border: 'none', overflow: 'hidden'}} frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
                </Col>
            </Row>
        </div>
    )
}