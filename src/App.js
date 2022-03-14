import React from 'react';
import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from './Create';
import Homepage from './Homepage';
import View from './View';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/view" element={<View />}></Route>
    </Routes>
    </HashRouter>
    
  );
}

export default App;
