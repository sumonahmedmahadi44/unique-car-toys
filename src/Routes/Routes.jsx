import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Footer from "../Pages/Shared/Footer";
import AddToys from "../Pages/Home/AddToys/AddToys";
import PrivateRoute from "../Private/PrivateRoute";
import AllToys from "../Pages/Home/AllToys/AllToys";
import MyToys from "../Pages/Home/MyToys/MyToys";
import UpdatedToys from "../Pages/Home/UpdatedToys/UpdatedToys";
import SingleToyDetails from "../Pages/Home/SingleToyDetails/SingleToyDetails";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
      },
        {
            path: '/',
            element: <Footer></Footer>
      },
        {
            path: '/login',
            element: <Login></Login>
      },
        {
            path: '/register',
            element: <Registration></Registration>
      },
        {
            path: '/addToys',
            element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
        {
            path: '/allToys',
            element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/updatedToys/:id',
        element: <PrivateRoute><UpdatedToys></UpdatedToys></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/post-toys/${params.id}`)
      },
      {
        path: '/singleToys/:id',
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/singleToy/${params.id}`)
      },
       
        
    ]
    },
  ]);


  export default router