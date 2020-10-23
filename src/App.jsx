import React from 'react';
import './App.css';
import ListadoClientes from './componentes/ListadoClientes'
import Cliente from './componentes/Cliente'
import {BrowserRouter, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import fondo from './assets/image/fondo.jpg'

const GlobalStyle= createGlobalStyle`
  body{
    font-family:'Lucida Sans', sans-serif;
    text-align:center;
    background-image: url(${fondo});
  }
`;

const App = () =>{
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Route exact path='/' component={ListadoClientes}/>
      <Route path='/cliente/:id' component={Cliente}/>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
