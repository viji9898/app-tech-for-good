import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./components/LandingPage";
import { NotFound } from "./utils/notFound";
import { NavBar } from "./utils/navBar";

function App() {
  const [helloWorld, setHelloWorld] = useState("");

  const getHelloWorld = () => {
    axios
      .get(".netlify/functions/getHelloWorld", {
        baseURL: "/",
      })
      .then(function (response) {
        setHelloWorld(response.data.data);
      });
  };
  useEffect(() => {
    getHelloWorld();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage helloWorld={helloWorld} />}
        />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
