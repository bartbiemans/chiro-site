import { Col, Row} from "react-bootstrap";
import React from "react";

interface Props{
    body:string;
    title?:string
    date:Date
}

export const Announcement = (props: Props) => {
    return (
       <Row className={'justify-content-left ml-5 mt-5 mb-5'}>
           <Col className={' announcement-card'}>
               <div  style={{textAlign:'left'}}>
                   {props.title && <div><b className={'text-success'}>{props.title}</b> </div>}
                   <small> <i>Updated on : {props.date.toLocaleDateString()}</i></small>
               </div>
               <p className={'mt-3'}>{props.body}</p>
           </Col>
       </Row>
    )
}