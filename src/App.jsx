import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FrontPage from './Nettisivujen_Koodit/FrontPage'
import TrialAdoption from './Nettisivujen_Koodit/TrialAdoption'
import PrivacyPolicy from './Nettisivujen_Koodit/PrivacyPolicy'
import PreApproval from './Nettisivujen_Koodit/PreApproval'
import Policies from './Nettisivujen_Koodit/Policies'
import InfoGuides from './Nettisivujen_Koodit/InfoGuides'
import FeesAndProcess from './Nettisivujen_Koodit/FeesAndProcess'
import FAQ from './Nettisivujen_Koodit/FAQ'
import DogProfiles from './Nettisivujen_Koodit/DogProfiles'
import ContactDetails from './Nettisivujen_Koodit/ContactDetails'
import Blogs from './Nettisivujen_Koodit/Blogs'
import Adoption from './Nettisivujen_Koodit/Adoption'
import NavigationBar from './Nettisivujen_Koodit/NavigationBar'
import "mdb-ui-kit/css/mdb.min.css"; 
import "mdb-ui-kit"; 

function App() {
  return(
    <div>
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
