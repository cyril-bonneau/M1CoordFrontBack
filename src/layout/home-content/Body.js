import React, { Component } from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import Header from '../Header'

class Body extends Component {

    render() {
        return (
            <div>
                <Header />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        )
    }
}

export default Body
