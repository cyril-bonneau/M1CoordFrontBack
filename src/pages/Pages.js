import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Body from '../layout/home-content/Body'
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Route } from 'react-router'
import BodyDashboard from '../layout/dashboard-content/Body'

const Pages = () => {
    return( 
        <div>
            <Header />
            <BrowserRouter>
                <Route exact path="/">
                <Body />
                </Route>
                <Route exact path="/dashboard">
                <BodyDashboard />
                </Route>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

{/*<div>
        <Header />
        <Body />
        <Footer />
        </div>*/}

export default Pages;