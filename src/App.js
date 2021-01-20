import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Root from './routes/Root';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Root />
    </BrowserRouter>
    );
}

export default App;
