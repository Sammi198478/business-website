import React from 'react'
import {NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className='fixed w-full'>
        <ul className='flex flex-wrap justify-between mx-auto'>
            <a href="" className='font-semibold text-2xl'>Hablu-Programmer</a>
            <div className='flex [&>li]: pl-10'>
                <li className='pl-7'><NavLink to='/'>Home</NavLink></li>
                <li className='pl-7'><NavLink to='/About'>About</NavLink></li>
                <li className='pl-7'><NavLink to='/Contact'>Contact</NavLink></li>
                <li className='pl-7'><NavLink to='/SignUp'>SignUp</NavLink></li>
            </div>
        </ul>
    </nav>
    <Outlet />
   
    </>
  )
}

export default  Navbar;