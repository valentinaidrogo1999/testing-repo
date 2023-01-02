import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUsPage from "./about-us";
import CartPage from "./cart";
import HomePage from "./home";
import ProductsPage from "./products";

export const HOME_PAGE_PATH = "/";
export const PRODUCTS_PAGE_PATH = "/productos";
export const ABOUT_US_PAGE_PATH = "/sobre-nosotros";
export const CART_PAGE_PATH = "/carrito";

const router = createBrowserRouter([
  {
    path: HOME_PAGE_PATH,
    element: <HomePage />,
  },
  {
    path: PRODUCTS_PAGE_PATH,
    element: <ProductsPage />,
  },
  {
    path: ABOUT_US_PAGE_PATH,
    element: <AboutUsPage />,
  },
  {
    path: CART_PAGE_PATH,
    element: <CartPage />,
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
