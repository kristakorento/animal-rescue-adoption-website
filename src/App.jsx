import './Nettisivujen_Tyylit/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './Nettisivujen_Koodit/FrontPage';
import TrialAdoption from './Nettisivujen_Koodit/TrialAdoption';
import PrivacyPolicy from './Nettisivujen_Koodit/PrivacyPolicy';
import Policies from './Nettisivujen_Koodit/Policies';
import InfoGuides from './Nettisivujen_Koodit/InfoGuides';
import FeesAndProcess from './Nettisivujen_Koodit/FeesAndProcess';
import FAQ from './Nettisivujen_Koodit/FAQ';
import DogProfiles from './Nettisivujen_Koodit/DogProfiles';
import ContactDetails from './Nettisivujen_Koodit/ContactDetails';
import Blogs from './Nettisivujen_Koodit/Blogs';
import Adoption from './Nettisivujen_Koodit/Adoption';
import NavigationBar from './Nettisivujen_Koodit/NavigationBar';
import Footer from './Nettisivujen_Koodit/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)

  useEffect(() => {
    // Check if the cookie banner has already been dismissed
    const cookieDismissed = localStorage.getItem('cookieBannerDismissed')
    if (!cookieDismissed) {
      setShowCookieBanner(true)
    }
  }, [])

  const handleDismiss = () => {
    // Dismiss the cookie banner and save the state in localStorage
    localStorage.setItem('cookieBannerDismissed', 'true')
    setShowCookieBanner(false)
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      {showCookieBanner && (
        <div className="cookie-banner">
          <p>
            We use only essential cookies that are necessary for the website to function. For more details, see our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>
          <button onClick={handleDismiss}>Got it</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/adoption/trial-adoption" element={<TrialAdoption />} />
        <Route path="/contact-details/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/adoption/policies" element={<Policies />} />
        <Route path="/adoption/info-guides" element={<InfoGuides />} />
        <Route path="/adoption/fees-and-process" element={<FeesAndProcess />} />
        <Route path="/adoption/faq" element={<FAQ />} />
        <Route path="/dog-profiles" element={<DogProfiles />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/adoption" element={<Adoption />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;