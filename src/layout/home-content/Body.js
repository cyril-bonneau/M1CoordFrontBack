import React, { Component } from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'

class Body extends Component {

    render() {
        return (
            <div>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        )
    }
}

export default Body
