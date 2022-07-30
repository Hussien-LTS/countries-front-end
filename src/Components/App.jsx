import React from "react";
import  { BrowserRouter as Router, Routes,	Route} from 'react-router-dom';
const Home = React.lazy(() => import('./Home/Home.jsx'));
function App() {
  return (
  
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/test" element={<Test />} /> */}
        </Routes>
      </Router>
     
  );
}

export default App;
