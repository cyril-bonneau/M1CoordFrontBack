import React, { Component } from 'react'
import '../assets/sass/home/style.scss'
import logo from '../assets/img/1.png'
import logo_header from '../assets/img/logo.png'
import InscriptionForm from './home-content/InscriptionForm'
import Deconnexion from './Deconnexion'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
        };
    }

    render() {
        return (
        <header className="head-home">
            <div>
                <img src={logo_header} />

                <Deconnexion />

                <div style={{marginTop: "12%", marginLeft: "6%", letterSpacing: "3.3px"}}>
                    <span>Ou que vous soyez<br/><br/>Restez <strong>Freelance</strong></span>
                </div>
                <br/>

            </div>
        </header>
        )
    }
}

export default Header