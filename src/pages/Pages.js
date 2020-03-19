import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Body from '../layout/home-content/Body'
import { BrowserRouter, Route } from 'react-router-dom';
import BodyDashboard from '../layout/dashboard-content/Body'

const Pages = () => {
    return( 
        <div>
            <Header />
            <BrowserRouter>
                <Route path="/" exact component={Body} />
                <Route path="/dash" exact component={BodyDashboard} />
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default Pages;