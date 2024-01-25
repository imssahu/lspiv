import Services from "./components/Services";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
