import React from "react";
import Layout from "./Layout";

import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import Hambarger from "./components/Hambarger/Hambarger";

// sections
import MyDay from "./container/MyDay/MyDay";
function App() {
  return (
    <div className="ToDo" style={{ height: "100vh" }}>
      <Backdrop />

      <Layout>
        <Hambarger />
        <MyDay />
      </Layout>
    </div>
  );
}

export default App;
