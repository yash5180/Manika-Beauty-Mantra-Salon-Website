import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home1 from "./components/Home1"
import About from "./components/About"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Bridal from "./components/Bridal"
import BookAppointment from "./components/BookAppointment"
import Gallery from "./components/Gallery"


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home1/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'services',
          element:<Service/>
        },
        {
          path:'bridal',
          element:<Bridal/>
        },
        {
          path:'bookappointment',
          element:<BookAppointment/>
        },
        {
          path:'gallery',
          element:<Gallery/>
        }
      ]

    }
  ]
)
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App