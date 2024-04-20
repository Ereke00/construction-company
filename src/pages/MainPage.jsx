import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/Home/About'
import Services from '../components/Our_services/Services'
import Customers from '../components/Customers_comment/Customers'
import News from '../components/News/News'
import MeetingForm from '../components/CallBack/callBack'

const MainPage = () => {
    return (
        <div>
            <Header />
            <About />
            {/* <Services /> */}
            <Customers />
            {/* <News /> */}
            {/* <Footer /> */}
            <MeetingForm />
        </div>
    )
}

export default MainPage
