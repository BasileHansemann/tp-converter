import { useState } from "react";
import CurrenciesList from "../CurrenciesList";
import "./styles.scss";

function Amount() {
  let [baseAmount, setBaseAmount] = useState("1");
  let Euro = "Euro";
  if (baseAmount > 1) {
    Euro = "Euros";
  }
  // console.log(Euro);
  return (
    <div className="container-bottom">
      <div className="amount">
        <div className="amount-top">
          <p className="amount-text">montant en €uros à convertir: </p>
          <input
            className="amount-input"
            type="number"
            value={baseAmount}
            onChange={(event) => {
              let newNumber = event.target.value;
              if (newNumber === "") {
                newNumber = 0;
              }
              setBaseAmount(newNumber);
            }}
          />{" "}
          <p>{Euro}</p>
        </div>
      </div>
      <ul>
        <CurrenciesList baseAmount={baseAmount} />
      </ul>
    </div>
  );
}

export default Amount;
