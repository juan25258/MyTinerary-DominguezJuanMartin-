/* import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/Cities",
    element: <Layout />,
    children: [{ path: "/Cities", element: <Cities /> }],
  },
  {
    path: "/Details",
    element: <Layout />,
    children: [{ path: "/Details/:id", element: <Details /> }],
  },
]); */

//function App() {
  /* const [count, setCount] = useState(0); */

  //return (
    {/* <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
 */}
//con la config de arriba tambien funciona, pero la de abajo es la mas reciente:

import Layout from "./layouts/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Details from './pages/Details';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cities" element={<Cities />} />
          <Route path="Details" element={<Details/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
