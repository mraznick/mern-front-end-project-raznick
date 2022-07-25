import "./App.css";
import Pizzas from "./screens/Pizzas.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Pizzas from "./components/Pizza.jsx";
import { Routes, Route } from "react-router-dom";
import { PizzaDetail } from "./screens/PizzaDetail.jsx";
import { PizzaBake } from "./screens/PizzaBake.jsx";
import { PizzaEdit } from "./screens/PizzaEdit.jsx";

function App() {
  return (
    <div>

      <div id="page-header">
        <h1 id="page-header-text">PIZZAS!</h1>
      </div>

      <div id="nav">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/pizzas" element={<Pizzas />} />

          <Route path="/pizzas/:id" element={<PizzaDetail />} />

          <Route path="/add-pizza" element={<PizzaBake />} />

          <Route path="/pizzas/:id/edit" element={<PizzaEdit />} />
          
        </Routes>
      </div>

      <div className="master-div">
        <div className="accordion-container">
          <h3>
            <Pizzas />
          </h3>
        </div>
      </div>

    </div>
  );
}

export default App;
