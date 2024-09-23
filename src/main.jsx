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
import Login from './firebase file/Login';
import SignUp from './firebase file/SignUp';
import PrivateRoute from './firebase file/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:  <Home></Home>,
      },
      {
        path: "/addBreads",
        element: <PrivateRoute><AddBread></AddBread></PrivateRoute>   ,
      },
      {
        path: "/read",
        element:  <Read></Read> ,
   
      },
      {
        path: "/login",
        element:  <Login></Login> ,
   
      },
      {
        path: "/up",
        element: <SignUp></SignUp>  ,
   
      },
      {
        path: "/upBreads/:id",
        element: <Update></Update> ,
        loader: ({params}) => fetch(`https://haven-server-bvwo7e7l0-minhazapons-projects.vercel.app/users/${params.id}`)
   
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
