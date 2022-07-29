import React, { useEffect, useState } from "react";
import axios from "axios";

import Cards from "./Cards";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CountryCard = (props) => {
  const [countries, setCountries] = useState("");
  const [country, setCountry] = useState("");

  const handleClicks = async (name) => {
    console.log("handleClick", name);
    const response = await axios.get(`http://localhost:3030/v1/countries/${name}`);

    setCountry(response);
    console.log("swrwr",country);
  };
  const handelGetCountries = async () => {
    var options = {
      method: "GET",
      url: "http://localhost:3030/v1/countries/all",
    };
    const response = await axios.request(options);
    setCountries(response);
  };
  useEffect(() => {
    handelGetCountries();
  }, []);

  return (
    <>
      {}
      {countries ? (
        <Row xs={2} md={3} className="g-4">
          <Col>
            {countries.data.map((country, idx) => (
              <Cards
                key={idx}
                Img={country.flag}
                title={country.name}
                capital={country.capital}
                handleCLick={()=>handleClicks(country.name)}
              />
            ))}
          </Col>
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CountryCard;
