import React from 'react';
import './App.sass';

import { Information } from "./components/information";

import { Route, BrowserRouter } from "react-router-dom";

export function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <header className="App-header">
                  <Route path={["/", "/home"]} exact component={Information} />
              </header>
          </div>
      </BrowserRouter>
  );
}
