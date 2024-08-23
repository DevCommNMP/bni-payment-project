import React, { Fragment } from 'react'
import Navbar from '../components/navbar/navbar'
import PaymentButtons from '../components/paymentButtons/paymentButtons'
import HomepageMainBanner from '../components/paymentButtons/banners/homepageBanner/homepageMainBanner'
const Homepage = () => {
    const titles=["New Member Payment","Renewal Payment","Renewal Payment With Late Fee","All Training Payments","Meeting Payment"]
  return (
<Fragment>
<Navbar/>
<PaymentButtons titles={titles}/>
<HomepageMainBanner/>
</Fragment>
  )
}

export default Homepage