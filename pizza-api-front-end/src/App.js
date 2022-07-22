import "./App.css";
import Pizzas from "./components/Pizzas.jsx"

function App() {
  return (
    <div>
      <div className="master-div">
        <div className="accordion-container">
          {/* {data.map((item, index) => { */}

          <div className="item-parent">
            <div className="item-title">Pizza 1
              <div className="item-content">
                <Pizzas />
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
