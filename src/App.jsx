import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import Price from "./Price";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/pricing' element={<Price/>}/>
      
    </Routes>
  );
};

export default App;