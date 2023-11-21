import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //componentes de ruteo
import Login from './Paginas/auth/login';
import CrearCuenta from './Paginas/auth/CrearCuenta';
import Home from './Paginas/auth/Home';

function App() {


  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/ >
            <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/ >
            <Route path="/home" exact element={<Home/>}/ >
        </Routes>
      </Router>
    </Fragment>
 
  );
}
 
export default App;