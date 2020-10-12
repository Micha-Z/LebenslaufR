import React, { useState } from "react";
import "./App.css";
import "./styles/app.module.css";
import DataForm from "./components/UserData/DataForm";
import EduForm from "./components/UserEdu/EduForm";

function App() {
  const [data, setData] = useState({
    userdata: {},
    edudata: [],
    userexp: {},
  });

  const addData = (item) => {
    setData({ ...data, ...item });
  };

  return (
    <div className="App d-flex">
      <div className="container">
        <h1>Lebenslauf</h1>
        <DataForm addData={addData} />
        <EduForm addData={addData} />
        {/* <div className="card"><h2>Arbeitserfahtung</h2></div> */}
        {/* <div className="card"><h2>Fähigkeiten</h2></div> */}
      </div>
    </div>
  );
}

export default App;
