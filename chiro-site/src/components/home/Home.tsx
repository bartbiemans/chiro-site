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
                    <Announcement title={'Soepverkoop'}
                                  body={'Zitten jullie net als ons ook al zo hard af te tellen naar het kamp? Dan hebben wij daar de perfecte remedie voor!\n' +
                                  'Vanaf vandaag kunnen jullie echte kamp-soep bestellen. Deze soep wordt volgens het authentieke recept van onze kookploeg gemaakt en doet u al even denken dat u op kamp bent!\n' +
                                  'U kan een liter soep al aanschaffen voor 5€ en dit wel in 2 verschillende smaken, namelijk tomaten of groentesoep. Dit is zelfs inclusief levering aan huis. Over een goede deal gesproken!\n' +
                                  'De opbrengst van deze verkoop wordt gebruikt om nieuwe tenten te kopen.U kan uw bestelling plaatsen tot en met vrijdag 04/06, dus wees er snel bij!'}
                                  link={'https://docs.google.com/forms/d/e/1FAIpQLSe-xnNDFigmgB4U_MAC7iS6ZBFioBh4ej5_AB4lMCkHDPOMVQ/viewform?fbclid=IwAR0hRSuKYaaMeIPEoyIjfXdmtMglWCv6bF9UWG4JfeeLP8wpD7P78j81NOU'}
                                  date={new Date(2021, 5, 4)}/>
                    <Announcement title={'Update corona maatregelen - 27/05/2021'}
                                  body={'Beste ouders en leden,Goed nieuws! Vanaf 6/06 mogen we terug volledige zondag chiro geven! Dan is het terug chiro vanaf 14-18u voor iedereen! Tot dan!'}
                                  date={new Date(2021, 5, 27)}/>
                    <Announcement title={'Update corona maatregelen - 4/05/2021'}
                                  body={'Beste ouders en leden,Goed nieuws! De corona maatregelen laten ons toe om terug chiro te geven in groepen van 25 personen! Concreet betekent dit het volgende : De sloebers, bengels en kerels hebben chiro van 13-15u, en de rakkers,toppers en aspiranten hebben chiro van 16-18u. Dit btekent ook dat jullie jullie niet meer hoeven in te schrijven voor een zondag. Tot dan!'}
                                  date={new Date(2021, 5, 4)}/>
                    <Announcement title={'Update corona maatregelen - 8/03/2021'}
                                  body={'Beste ouders en leden,Goed nieuws! De corona maatregelen laten ons toe om terug chiro te geven aan zowel de jongste als de oudste afdelingen. Lees hieronder even hoe dit concreet in zijn werking gaat : We gaan bij ons terug overschakelen op een systeem van 2 shiften. Dit om te voorkomen dat er teveel mensen van verschillende bubbels tegelijkertijd aankomen en vertrekken en zodat we meer speelruimte hebben.Shift 1 - 13:00 - 15:00 -> Deze shift komen de sloebers, bengels en de kerels.Shift 2 - 16:00 - 18:00 -> Deze shift komen de rakkers, toppers en aspirantenVoor de oudsten gelden nog steeds dezelfde maatregelen. Dit betekent dat jullie maximum met 10 tegelijkertijd chiro krijgen en altijd een mondmasker moeten dragen.Verder willen we ook vragen om de andere maatregelen nog steeds te respecteren. Dit betekent een mondmasker aanzetten als u uw kind komt afzetten of ophalen en uw kind een weekje thuis houden als hij symptomen vertoond of in contact is geweest met iemand die besmet is.Voor vragen of meer info kunnen jullie altijd bij de groepsleiding terecht. Wij kijken er alvast enorm naar uit!'}
                                  date={new Date(2021, 3, 8)}/>
                    <Announcement title={'Update corona maatregelen - 6/03/2021'}
                                  body={'Net zoals jullie hebben we gisteren naar de persconferentie gekeken, en hebben we gezien dat er versoepelingen aankomen, ook voor ons. We wachten nog heel even op de officiële richtlijnen van chiro nationaal voor we onze planning maken, maar we houden jullie op de hoogte! Meer info volgt zo snel mogelijk!'}
                                  date={new Date(2021, 3, 6)}/>
                    <Announcement title={'Nieuwe website'}
                                  body={'Zoals u kan zien is onze site helemaal vernieuwd. Mocht u iets opmerken dat niet goed is, of dat ontbreekt mag u dat altijd laten weten aan een van de leiding.'}
                                  date={new Date(2020, 12, 30)}/>
                    <Announcement title={'Corona maatregelen'}
                                  body={'Zoals u weet is het leiding geven tijdelijk beperkt door de COVID maatregelen. Concreet betekent dit voor ons dat enkel de ' +
                                  '3 oudste afdelingen chiro hebben. De jongste leden hebben jammer genoeg - geen chiro.Ook vragen wij om ten alle tijde een mondmasker te dragen, en de social distancing te respecteren. '}
                                  date={new Date(2021, 1, 6)}/>
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