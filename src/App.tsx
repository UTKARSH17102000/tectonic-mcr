import React from 'react';
import './App.css';
import LookBook from './components/Lookbook';
import { looks } from './lookBook';

function App() {
  return (
    <div className="App">
    <LookBook looks = {looks} />
    </div>
  );
}

export default App;
