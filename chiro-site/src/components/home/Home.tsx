import React from "react";
import {Col, Row} from "react-bootstrap";
import {Announcement} from "../announcement/Announcement";
import Image from "react-bootstrap/Image";

export const Home = () => {
    return (
            <div >
                <Row>
                    <Col className={'justify-content-center'}>
                        <h3 className={'text-center pt-2 text-success'}><b>De beste chiro uit merksem en omstreken!</b>
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
                    <Col lg={7}>
                        <Announcement title={'Het is genoeg geweest'}
                                      body={'De komende zondagen gaan we leiding geven van 14u-18u. Dit enkel voor de jongste 3 afdelingen, omdat het verboden is om dat voor de oudere groepen te doen.'}
                                      date={new Date()}/>
                        <Announcement title={'Het is genoeg geweest'}
                                      body={'De komende zondagen gaan we leiding geven van 14u-18u. Dit enkel voor de jongste 3 afdelingen, omdat het verboden is om dat voor de oudere groepen te doen.'}
                                      date={new Date()}/>
                        <Announcement title={'Het is genoeg geweest'}
                                      body={'De komende zondagen gaan we leiding geven van 14u-18u. Dit enkel voor de jongste 3 afdelingen, omdat het verboden is om dat voor de oudere groepen te doen.'}
                                      date={new Date()}/>
                        <Announcement title={'Het is genoeg geweest'}
                                      body={'De komende zondagen gaan we leiding geven van 14u-18u. Dit enkel voor de jongste 3 afdelingen, omdat het verboden is om dat voor de oudere groepen te doen.'}
                                      date={new Date()}/>
                        <Announcement title={'Het is genoeg geweest'}
                                      body={'De komende zondagen gaan we leiding geven van 14u-18u. Dit enkel voor de jongste 3 afdelingen, omdat het verboden is om dat voor de oudere groepen te doen.'}
                                      date={new Date()}/>
                        <Announcement title={'Het is genoeg geweest'}
                                      body={'De komende zondagen gaan we leiding geven van 14u-18u. Dit enkel voor de jongste 3 afdelingen, omdat het verboden is om dat voor de oudere groepen te doen.'}
                                      date={new Date()}/>
                    </Col>
                    <Col lg={1}/>
                    <Col lg={3} sm={0} className="pt-5 d-none d-lg-block">
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FChiro-Sint-Jozef-Jongens-Merksem-143531585754896%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=2817641565220366"
                            width="500" height="600" style={{border: 'none', overflow: 'hidden'}} frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
                    </Col>
                </Row>
            </div>
    )
}