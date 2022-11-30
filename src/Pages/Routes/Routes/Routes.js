import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import MyProduct from "../../Dashboard/AddProduct/MyProduct"
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Dashboard/AllSeller/AllSeller";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import Payment from "../../Dashboard/Payment/Payment";
import ProductDetails from "../../Home/Home/Categories/ProductsDetail/ProductDetails";
import Home from '../../Home/Home/Home'
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AdminRoutes from "../AdminRoute/AdminRoutes";
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';



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
                path:'/categories/:id',
                element:<ProductDetails></ProductDetails>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
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

    },
    {
        path:'/dashboard', 
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {path:'/dashboard/myOrders',
             element:<MyOrders></MyOrders>,
            },
            {path:'/dashboard/addProduct',
             element:<AddProduct></AddProduct>,
            },
            {path:'/dashboard/myProduct',
             element:<MyProduct></MyProduct>,
            },
            {path:'/dashboard/allSeller',
             element:<AdminRoutes><AllSeller></AllSeller></AdminRoutes>,
            },
            {path:'/dashboard/allBuyer',
             element:<AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>,
            },
            {path:'/dashboard/payment/:id',
             element:<Payment></Payment>,
             loader:({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])