import React from "react";
import "./Style.css";
import{Switch,Route} from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Monitor from "./Monitor";


export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/"> <Login/> </Route>
        <Route exact path="/home">
         <Header/>
         <Home/> 
         </Route>
        <Route exact path="/monitor">
         <Header/>
         <Monitor/> </Route>
      </Switch>

    </div>
  );
}
