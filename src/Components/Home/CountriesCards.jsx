import React, { useEffect, useState } from "react";
import axios from "axios";

import Cards from "../Shared/Cards";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CountriesCard = (props) => {
  const [countries, setCountries] = useState("");
  const [country, setCountry] = useState("");

  const handleClicks = async (countryName) => {
    var options = {
      method: "GET",
      url: `http://localhost:3030/v1/countries/name/${countryName}`,
    };
    const response = await axios.request(options);

    setCountry(response.data);
    console.log("handleClicks",country);
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
                BtnText="More Info"
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

export default CountriesCard;
