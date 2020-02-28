import React, { Component } from 'react'
import backGround from '../../assets/img/back_second_section.png'
import '../../assets/sass/home/style.scss'

class SecondSection extends Component {

    render() {
        return (
            <div>
                <img className="second-section" src={backGround} />
            </div>
        )
    }
}

export default SecondSection
