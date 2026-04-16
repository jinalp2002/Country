import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Layout from './Components/Layout/Layout.jsx'
import { ErrorPage } from './Pages/ErrorPage.jsx'
import Country from './Pages/Country.jsx'
import CountryDetails from './Components/Layout/CountryDetails.jsx'

const router = createBrowserRouter
  ([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />

      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
