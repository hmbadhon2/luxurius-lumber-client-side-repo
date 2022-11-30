import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/Admin/useAdmin';
import useSeller from '../Hook/Seller/useSeller';
import useBuyer from '../Hook/Buyer/useBuyer'
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    
    return (
        <div>
            <Header></Header>
        <div className="drawer drawer-mobile">
        <input id="Luxurious-Lumber" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
       <Outlet></Outlet>

        {/* <label htmlFor="Luxurious-Lumber" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
   */}
        </div> 
         <div className="drawer-side">
         <label htmlFor="Luxurious-Lumber" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     


                 { 
                    isAdmin&& 
                    <>
                    <li><Link to='/dashboard/allSeller'> All Seller</Link></li>
                    <li><Link to='/dashboard/allBuyer'> All Buyer</Link></li>
                   
                    </>
                    
             }

                  {  isSeller &&
                    <>
                    
                    <li><Link to='/dashboard/addProduct'> Add Product</Link></li>
                    <li><Link to='/dashboard/myProduct'> My Product</Link></li>

                     </>}

                   { isBuyer &&  
                <li><Link to='/dashboard/myOrders'> My Orders</Link></li>


                }  
                
               

           
        </ul>
  
  </div>
</div>
        </div>
      
    );
};

export default DashboardLayout;