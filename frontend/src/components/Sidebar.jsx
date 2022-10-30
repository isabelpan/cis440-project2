import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GiAbstract119 } from 'react-icons/gi';

import { links } from '../data/SidebarData';


const Sidebar = () => {

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-violet-700 text-md m-2 bg-gray-200';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-600 hover:bg-light-gray m-2'

  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-19'>
        <>
        <div className='flex flex-row justify-evenly'>
            <Link to='/dashboard' className='items-center gap-1 mt-3 flex text-center text-4xl font-extrabold tracking-tight dark:text-white text-slate-900 pt-4'>
                <GiAbstract119 /> <span>Mellow</span>
            </Link>
        </div>

        <div className='mt-10 pl-2'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-500 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`} 
                  key={link.name} 
                  className={({ isActive }) => isActive ? activeLink : normalLink}>

                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>

                </NavLink>
              ))}
            </div>
          ))}
        </div>
          </>
    </div>
  )
}

export default Sidebar