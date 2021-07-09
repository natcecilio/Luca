import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import "./App.css"
import ThemeProvider from './context/Theme'



function App() {
  return (
   
    
      <Router>
        <ThemeProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </ThemeProvider>
      </Router>
      
   
  );
}

export default App;
