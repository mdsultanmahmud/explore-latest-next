import React from 'react';
import styles from "../styles/navbar.module.css"
import Link from 'next/link';
const Navbar = () => {
    const menuList = <>
        <li> <Link href={"/"}>Home</Link> </li>
        <li> <Link href={"/about"}>About</Link> </li>
        <li> <Link href={"/movie"}>Movie</Link> </li>
        <li> <Link href={"/contact"}>Contact</Link> </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-2xl py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuList}
                    </ul>
                </div>
                <Link href={"/"} className="text-2xl text-green-800 font-bold ">XenonByte</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuList}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;