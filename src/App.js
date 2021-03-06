import React from "react";
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Overview from './pages/Overview';
import {Reports, ReportsOne, ReportsTwo, ReportsThree} from './pages/Reports';
import Products from './pages/Products';
import About from './pages/About';
import "./App.css";

export default function App() {
  return (
     <Router>
    <Sidebar />
    <Switch>
      <Route path="/overview" exact component={Overview} />
      <Route path="/reports" exact component={Reports} />
      <Route path="/reports/reports1" exact component={ReportsOne} />
      <Route path="/reports/reports2" exact component={ReportsTwo} />
      <Route path="/reports/reports3" exact component={ReportsThree} /> 
      <Route path="/products" exact component={Products} />
      <Route path="/about" exact component={About} />
    </Switch>
     </Router> 
  );
}
