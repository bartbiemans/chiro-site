import Card from "react-bootstrap/Card";
import React from "react";

interface Props {
    image: string;
    name: string;
    gsm:string;
    mail:string;
}

export const Leider = (props: Props) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <span>{props.gsm}</span><br/>
                    <span>{props.mail}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}