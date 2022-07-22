import "./App.css";
import Pizzas from "./components/Pizzas.jsx"
import Nutrition from "./components/Nutrition.jsx"

function App() {
  return (
    <div>
      <div className="master-div">
        <div className="accordion-container">
          {/* {data.map((item, index) => { */}

          <div className="item-parent">
            <div className="item-title">
              <h3><Pizzas /></h3>
              <div className="item-content">
                <Nutrition />
                
              </div>
            </div>
          </div>

          {/* // })} */}
        </div>
      </div>
    </div>
  );
}

export default App;
