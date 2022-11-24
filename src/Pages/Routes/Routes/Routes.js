import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from '../../Home/Home/Home'
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]

    }
])