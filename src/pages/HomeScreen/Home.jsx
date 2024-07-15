import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import HomeScreen from '../Home/homeScreen'
import FooterMobile from '../../components/auth/signup/components/footer/Footer'

export default function DashBoardHomeScreen() {
    
  return (
    <div>
      <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF]  bg-gradient-to-b">
            <Navbar />
            <HomeScreen />
            <div className="w-full pb-[15px] pt-[50px] md:pt-0">
              <FooterMobile />
            </div>
          </div>
    </div>
  )
}
