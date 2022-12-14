import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import luxuriousLogo from '../../../assets/lumber logo.png'

const Header = () => {
    const {user,logOut, } = useContext(AuthContext)
    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(err =>console.log(err))
    }
    const navItem = <>
    <li><Link to='/home'>Home</Link> </li>
    <li><Link to='/Dashboard'>Dashboard</Link> </li>
    
    {
        user?.uid?
         <li><button onClick={handleLogOut}>Sign Out</button> </li>
         :
        <>
        <li><Link to='/login'>Login</Link> </li>
        <li><Link to='/signup'>SignUp</Link> </li>
        </> 
    }
   
    <li><Link to='/blog'>Blog</Link> </li>
    
    </>

    return (
        <div className="navbar bg-base-100 shadow">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md  w-52">
      {
        navItem
      }
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl"><img src={luxuriousLogo} alt="" /> Luxurious Lumba</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal   mt-3 p-2 font-semibold text-sm  bg-base-100 rounded-md">
     {
        navItem
     }
    </ul>
  </div>
  
</div>
    );
};

export default Header;