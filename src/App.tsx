import React from 'react';
import './App.sass';

import { Information } from "./components/information";
import { Links } from "./components/links";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Information />
          <Links />
      </header>
    </div>
  );
}
