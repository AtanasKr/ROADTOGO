import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tips from './pages/Tips';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgottenPassSend from './pages/ForgottenPassSend';
import PassReset from './pages/PassReset';

const Layout = ()=>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/tips",
        element:<Tips/>
      },
      {
        path:"/destinations",
        element:<Destinations/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },{
    path: "/register",
    element: <Register/>,
  },{
    path: "/login",
    element: <Login/>,
  },{
    path: "/forgotten-password",
    element: <ForgottenPassSend/>,
  },{
    path: "/password-reset",
    element: <PassReset/>,
  }
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
