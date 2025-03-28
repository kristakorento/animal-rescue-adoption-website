import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './Nettisivujen_Koodit/FrontPage';
import TrialAdoption from './Nettisivujen_Koodit/TrialAdoption';
import PrivacyPolicy from './Nettisivujen_Koodit/PrivacyPolicy';
import PreApproval from './Nettisivujen_Koodit/PreApproval';
import Policies from './Nettisivujen_Koodit/Policies';
import InfoGuides from './Nettisivujen_Koodit/InfoGuides';
import FeesAndProcess from './Nettisivujen_Koodit/FeesAndProcess';
import FAQ from './Nettisivujen_Koodit/FAQ';
import DogProfiles from './Nettisivujen_Koodit/DogProfiles';
import ContactDetails from './Nettisivujen_Koodit/ContactDetails';
import Blogs from './Nettisivujen_Koodit/Blogs';
import Adoption from './Nettisivujen_Koodit/Adoption';
import NavigationBar from './Nettisivujen_Koodit/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/trial-adoption" element={<TrialAdoption />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pre-approval" element={<PreApproval />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/info-guides" element={<InfoGuides />} />
        <Route path="/fees-and-process" element={<FeesAndProcess />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dog-profiles" element={<DogProfiles />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/adoption" element={<Adoption />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;