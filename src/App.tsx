import React from 'react';
import './App.sass';

import { Home } from "./components/home";

import { Route, BrowserRouter } from "react-router-dom";

export function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Route path={["/", "/home"]} exact component={ Home } />
          </div>
      </BrowserRouter>
  );
}
