import Homepage from './Homepage.jsx';
import MainPage from './MainPage.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';

const routes = [
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
];

export default routes;