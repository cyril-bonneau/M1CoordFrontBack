import React, { Component } from 'react'
import backGround from '../../assets/img/back_first_section.png'
import '../../assets/sass/home/style.scss'

class FirstSection extends Component {

    render() {
        return (
            <div>
                <img className="first-section" src={backGround} />
            </div>
        )
    }
}

export default FirstSection
