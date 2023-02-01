import data from "../../data/currencies";
import Result from "../Result";
import { useState } from "react";
import "./styles.scss";

function CurrenciesList({ baseAmount }) {
  let [currencieValue, setCurrencieValue] = useState("1");
  let [currencieName, setCurrencieName] = useState("Euro");
  let result = baseAmount * currencieValue;
  const roundedResult = Math.round(result * 100) / 100;
  // console.log(roundedResult);

  const handleClick = (e) => {
    setCurrencieValue(e.currencieItem.rate);
    setCurrencieName(e.currencieItem.name);
  };

  return (
    <div>
      <div className="currencies">
        <p className="currencies-title">choisissez la devises : </p>

        <div className="currencies-List">
          {data.map((currencieItem) => (
            <li
              className="currencies-item"
              onClick={(e) => handleClick({ currencieItem })}
              key={currencieItem.name}
            >
              {currencieItem.name} : {currencieItem.rate}
            </li>
          ))}
        </div>
      </div>
      <Result roundedResult={roundedResult} currencieName={currencieName} />
    </div>
  );
}

export default CurrenciesList;
