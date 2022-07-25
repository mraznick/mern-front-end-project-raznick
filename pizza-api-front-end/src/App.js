import "./App.css";
import Pizzas from "./components/Pizzas.jsx"
import Nutrition from "./components/Nutrition.jsx"

function App() {
  return (
    <div>
      <h1 id="page-header">PIZZAS!</h1>
      <div className="master-div">
        <div className="accordion-container">
              <h3><Pizzas /></h3>
          <div className="item-parent">
            <div className="item-title">
              <div className="item-content">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
