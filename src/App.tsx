import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/shared/Header';
import HomePage from './Components/Home/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-ignore
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Put New Components Here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
