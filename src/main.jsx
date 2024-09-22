import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import AddBread from './AddBread'
import Read from './Read';
import Update from './Update';
import AuthContext from './firebase file/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBreads",
        element:  <AddBread></AddBread> ,
      },
      {
        path: "/read",
        element:  <Read></Read> ,
   
      },
      {
        path: "/upBreads/:id",
        element: <Update></Update> ,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
   
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContext>
         
    <RouterProvider router={router} />

    </AuthContext>
  
  </StrictMode>,
)
