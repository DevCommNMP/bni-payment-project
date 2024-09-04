import React from 'react'
import Navbar from '../components/navbar/navbar'
import PaymentButtons from '../components/paymentButtons/paymentButtons'
import Footer from '../components/footer/footer'
import RenewalPayment1 from '../components/form/renewalPayment'

const RenewalPayment = () => {
  return (
    <>
      <Navbar />
    <RenewalPayment1 />
    <Footer />
    </>
  )
}

export default RenewalPayment