import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/donated'>Donation</NavLink>
        <NavLink to='/statictis'>Statictis</NavLink>



    </>
 
    return (
        <div className="mt-12 mx-36	mb-12 " >
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-start">
                        <img src='./Logo.png' alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;