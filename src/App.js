import React from "react";
import Layout from "./Layout";

import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import Hambarger from "./components/Hambarger/Hambarger";
function App() {
  return (
    <div className="ToDo" style={{ height: "100vh" }}>
      <Backdrop />
      <Hambarger />
      <Layout></Layout>
    </div>
  );
}

export default App;
