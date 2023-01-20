import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Students from './components/body/Students';
import Header from './components/header/Header';
import RootRouter from './components/Router/RootRouter';

function App() {
  return (
    <div>
    <Header/>
    <RootRouter/>
    </div>
  );
}

export default App;
