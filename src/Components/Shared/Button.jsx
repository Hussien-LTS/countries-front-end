import React from "react";
import { Button} from "react-bootstrap";

function CustomButton(props) {
  return (
  
        <Button variant={props.variant} onClick={props.handleCLick}>
        {props.BtnText}
        </Button>
    
  );
}

export default CustomButton;