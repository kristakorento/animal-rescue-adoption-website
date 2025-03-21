import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FrontPage from './Nettisivujen Koodit/FrontPage'
import TrialAdoption from './Nettisivujen Koodit/TrialAdoption'
import PrivacyPolicy from './Nettisivujen Koodit/PrivacyPolicy'
import PreApproval from './Nettisivujen Koodit/PreApproval'
import Policies from './Nettisivujen Koodit/Policies'
import InfoGuides from './Nettisivujen Koodit/InfoGuides'
import FeesAndProcess from './Nettisivujen Koodit/FeesAndProcess'
import FAQ from './Nettisivujen Koodit/FAQ'
import DogProfiles from './Nettisivujen Koodit/DogProfiles'
import ContactDetails from './Nettisivujen Koodit/ContactDetails'
import Blogs from './Nettisivujen Koodit/Blogs'
import Adoption from './Nettisivujen Koodit/Adoption'
import NavigationBar from './Nettisivujen Koodit/NavigationBar'
import "mdb-ui-kit/dist/css/mdb.min.css";
import "mdb-ui-kit";

function App() {
  return(
    <div>
      <h1>Welcome!!!</h1>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <NavigationBar/>,
    children:[
      {
        path: '/',
        element: <FrontPage/>
      },
      {
        path: '/trial-adoption',
        element: <TrialAdoption/>
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy/>
      },
      {
        path: '/pre-approval',
        element: <PreApproval/>
      },
      {
        path: '/policies',
        element: <Policies/>
      },
      {
        path: '/info-guides',
        element: <InfoGuides/>
      },
      {
        path: '/fees-and-process',
        element: <FeesAndProcess/>
      },
      {
        path:'/faq',
        element: <FAQ/>
      },
      {
        path: '/dog-profiles',
        element:<DogProfiles/>
      },
      {
        path: '/contact-details',
        element: <ContactDetails/>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/adoption',
        element:<Adoption/>
      }
    ]
  },
])

export default App
