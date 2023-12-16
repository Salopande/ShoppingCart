import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Restaurantmenu from "./components/Restaurantmenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart";

const About = lazy (()=> import('./components/About'));

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children:[{
      path: "/",
      element: <Body />,
    },{
      path: "/about",
      element: <Suspense fallback={<h1>Loading..........</h1>}><About /></Suspense>,
    },
    {
       path: "/contact",
       element: <Contact/>
    },
    {
      path: "/restaurants/:resId",
      element: <Restaurantmenu/>
   },
   {
    path: "/cart",
    element:<Cart/>
 },
  ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
