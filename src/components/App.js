import React, { useState, useEffect } from "react";
import HomeCard from "./Cards/homeCards";
import Header from "./AppBar/Header";
import Footer from "./Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import VaccineSlotTable from "./vaccine-notification/vaccineNotification";
import { Cards, Chart, CountryPicker } from "./index.js";
import { fetchData } from "../api";

function App() {
  const [getData, setGetData] = useState({
    data: {},
    country: "",
  });

  useEffect(async () => {
    const fetchedData = await fetchData();
    setGetData(fetchedData);
  }, []);

  const handleCountryChange = async (country) => {
    const fetchCountryData = await fetchData(country);
    setGetData(fetchCountryData);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeCard} />
        <Route
          path="/vaccine-notification"
          exact
          component={VaccineSlotTable}
        />
        <Route
          path="/covid-cases"
          render={() => (
            <React.Fragment>
              <Cards data={getData} />
              <CountryPicker handleCountryChange={handleCountryChange} />
              <Chart data={getData} countries={getData} />
            </React.Fragment>
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
