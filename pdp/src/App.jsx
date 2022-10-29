import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";

const App = () => (
  <>
    <Header />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
PDP CONTENTS
    </div>
    <Footer/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
