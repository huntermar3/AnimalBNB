import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Rent from './routes/Rent.jsx'
import Privacy from './routes/Privacy.jsx'


const router = createBrowserRouter([
  {path: "/" , element: <App/>} ,
  {path: "/about" , element: <About/>},
  {path: "/contact" , element: <Contact/>},
  {path: "/rent" , element: <Rent/>},
  {path: "/privacy" , element: <Privacy/>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
