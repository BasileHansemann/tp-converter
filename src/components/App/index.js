import Amount from "../Amount";
import axios from "axios";
import Header from "../Header";
import React, { useState, useEffect } from "react";
import "./styles.scss";
import Footer from "../Footer";
//site de recupération des taux de change  https://app.abstractapi.com/
function App() {
  let [dataChange, setDataChange] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://exchange-rates.abstractapi.com/v1/live?api_key=36893e5c56bc447e86e211d482998790&base=EUR`,
        {}
      )
      .then((responseRate) => {
        console.log(responseRate);
        setDataChange(responseRate.data.exchange_rates);
      })
      .catch((error) => {
        console.log(error);
      })

      .finally((response) => {});
  }, []);

  console.log(dataChange);
  const dataFinal = Object.entries(dataChange);
  console.log(dataFinal);

  return (
    <div className="app">
      <Header />
      <Amount dataFinal={dataFinal} />
      <Footer />
    </div>
  );
}

export default App;
