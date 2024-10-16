import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/shared/Header';
import HomePage from './Components/Home/HomePage';
import PrivacyPolicyPage from './Components/Policy/PrivacyPolicyPage';
import OurVisionPage from './Components/Vision/OurVisionPage';
import VerbatimVisionPage from './Components/Vision/VerbatimVisionPage';
import JobsPage from './Components/Jobs/Jobs';
import TermsAndConditionsPage from './Components/Policy/TermsAndConditionsPage';

import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-ignore
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/our-vision" element={<OurVisionPage />} />
          <Route path="/verbatim-vision" element={<VerbatimVisionPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          {/* Put New Components Here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
