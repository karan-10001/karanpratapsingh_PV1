import React from 'react'
import Navbar from '../Components/Navbar'
import SocialMedia from '../Components/SocialMedia'

const Layout = ({children}) => {
    return (
        <div className='relative'>
            <Navbar />
            <SocialMedia />
            {children}
      </div>
  )
}

export default Layout