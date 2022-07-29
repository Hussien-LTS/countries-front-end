import React from "react";
// import CountryCard from "./Components/Card.jsx";
const CountryCard = React.lazy(() => import('./Components/Test.jsx'));
function App() {
  return (
    <>
      <CountryCard />
    </>
  );
}

export default App;
