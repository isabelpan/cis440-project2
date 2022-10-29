import React from 'react'
import { Calendar, Navbar, Sidebar } from '../components';


const Dashboard = () => {

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>

        <div className ='w-15 fixed sidebar bg-white'>
          <Sidebar />
        </div>
      
      </div>

      <div className='ml-72 pt-36'>
        <Calendar />
      </div>
    </div>
  )
}

export default Dashboard