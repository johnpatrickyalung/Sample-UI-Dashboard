import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Topbar from "./components/topbar/Topbar.jsx"
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
    <Topbar/>
    <div className="container">
      <Sidebar/>
       <Home />
    </div>
    </div>
  );
}

export default App;
