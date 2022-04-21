import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Login from './Components/Login/loginComponent';
import Actions from './Components/Actions/actionsComponent'
// import GetManager from './Components/GetManager/getManagerComponent';

function App() {
  return (
 
       <BrowserRouter>
          <Routes >
            <Route path={"/"} exact component={Login} />
            <Route path={"/actions"} exact component={Actions} />
          </Routes >
        {/* <Login />
        <Actions />
        <GetManager></GetManager> */}
        </BrowserRouter>


  );
}

export default App;
