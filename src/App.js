import React from "react";
import Data from "./data.json";

const App = () => {
  const fileData = Data.map((obj) => {
    const { id, name, city, planet, img } = obj;

    return (
      <div className="top" hey={id}>
        <p>
          My name is {name} and i lived in {city} whatever {planet}
        </p>
        <img className="img-box1" src={img} alt="ffs" />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div id="page">
        <div className="topSection">
          <h1>TEST IMG version 1</h1>
          {fileData}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
