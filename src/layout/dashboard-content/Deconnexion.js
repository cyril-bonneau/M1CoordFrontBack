import React, { Component } from 'react'
import '../../assets/sass/home/style.scss'

class ConnexionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {       
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => document.getElementById('connexion-wrapper').style.display="block"} className="connexion-button">
                    deconnexion
                </button>
            </div>
        )
    }
}

export default ConnexionForm
