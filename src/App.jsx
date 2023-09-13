import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SignIn";
import { useDispatch } from "react-redux";
import userActions from "./store/actions/user";

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
    children: [{ path: "/Details", element: <Details /> }],
  },
  {
    path: "/SignIn",
    element: <Layout />,
    children: [{ path: "/SignIn", element: <SingIn /> }],
  },
  {
    path: "/SignUp",
    element: <Layout />,
    children: [{ path: "/SignUp", element: <SignUp /> }],
  },
]);

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(userActions.authenticate())

  }, [])
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
