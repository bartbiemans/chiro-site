import Card from "react-bootstrap/Card";
import React from "react";

interface Props {
    image: string;
    name: string;
    bio: string;
    gsm:string;
    mail:string;
}

export const Leider = (props: Props) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="../../profielfoto.jpg"/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.bio}<br/>
                    <span>Gsm nummer : 0473707986</span><br/>
                    <span>Mail : bart.b@sintjozefjongens.be</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}