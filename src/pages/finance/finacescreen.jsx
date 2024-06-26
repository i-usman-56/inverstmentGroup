import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import FooterMobile from '../../components/auth/signup/components/footer/Footer'
import FinanceManagement from '../../components/Finance/finance'

export default function FinanceScreen() {
  return (
    <div>
    <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
      <Navbar />
      <FinanceManagement/>
      <div className="w-full pb-[15px] pt-[50px] md:pt-0">
        <FooterMobile />
      </div>
    </div>
  </div>
  )
}
