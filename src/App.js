import React from "react";
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import "./style.css";

export default function App() {
  return (
     <Router>
    <Sidebar />
     </Router>
  );
}
