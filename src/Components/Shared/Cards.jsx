import React from "react";
import { Card } from "react-bootstrap";
import CustomButton from "./Button";
import Button from "./Button";

function Cards(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.Img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}: {props.capital}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <CustomButton BtnText={props.BtnText} handleCLick={props.handleCLick} />
      </Card.Footer>
    </Card>
  );
}

export default Cards;
