import "./App.css";
import Pizzas from "./components/Pizzas.jsx"


function App() {
  return (
    <div>
      <div id="page-header">
        <h1 id="page-header-text">PIZZAS!</h1>
        </div>
      <div className="master-div">
        <div className="accordion-container">
              <h3><Pizzas /></h3>
        </div>
      </div>
    </div>
  );
}

export default App;
