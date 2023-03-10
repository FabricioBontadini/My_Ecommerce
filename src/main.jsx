import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.scss';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Pay from './views/Pay/Pay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products/:productId",
    element: <Products />,
  },
  {
    path: "/pay",
    element: <Pay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
