import React from "react";
import Button from "react-bootstrap/Button";
import {Card, Row, Col} from "react-bootstrap";

function Cards(props) {
  return (
 
        <Card>
          <Card.Img variant="top" src={props.Img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>capital is: {props.capital}</Card.Text>
            <Button variant="primary" onClick={props.handleCLick}>zzzzzz</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    
  );
}

export default Cards;
