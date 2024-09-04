import React from 'react'
import Navbar from '../components/navbar/navbar'
import PaymentButtons from '../components/paymentButtons/paymentButtons'
import Footer from '../components/footer/footer'
import BNIPaymentForm from '../components/form/bniPaymentForm'

const NewMemberPayment = () => {
    const titles = [
        "New Member Payment",
        "Renewal Payment",
        "Renewal Payment With Late Fee",
        "All Training Payments",
        "Meeting Payment"
    ];

    const links = [
        "new-member-payment",
        "renewal-payment",
        "renewal-payment-with-late-fee",
        "all-training-payments",
        "meeting-payment"
    ];
    


  return (
    
    
    <>
      <Navbar />
    {/* <PaymentButtons titles={titles} links={links} /> */}
    <BNIPaymentForm/>
    <Footer />
    </>
  )
}

export default NewMemberPayment