import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './Homepage.jsx';
import MainPage from './MainPage.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "MainPage",
    element: <MainPage />,
    children: [
      { path: "Shop", element: <Shop /> },
      { path: "Cart", element: <Cart /> }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
