import React from 'react';
import './App.sass';

import { Information } from "./components/information";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Information />
      </header>
    </div>
  );
}
