import React, { Component } from 'react'
import '../assets/sass/home/style.scss'
import logo from '../assets/img/1.png'
import logo_header from '../assets/img/logo.png'

class ConnexionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "", 
            password: ""        
        }
    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })

        console.log(this.state.password.length);
    }

    testeFunction = () => {
        alert(this.state.password);
    }

    render() {
        return (
            <div>
                <button onClick={() => document.getElementById('connexion-wrapper').style.display="block"} className="connexion-button">
                    connexion
                </button>

                <div id="connexion-wrapper" className="modal">
                    <form className="modal-content animate" action="">
                        <div className="imgcontainer">
                            <span onClick={() => document.getElementById('connexion-wrapper').style.display='none'} className="close" title="Close PopUp">&nbsp;x</span>
                            <img src={logo} alt="Avatar" className="avatar" />
                            <h1 style={{textAlign: "center"}}>Veuillez-vous connecter</h1>
                        </div>

                        <div className="container">
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>     
                            <button className="submit-button" type="submit" onClick={this.testeFunction}>Connexion</button>     
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ConnexionForm
