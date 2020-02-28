import React, { Component } from 'react'
import '../../assets/sass/home/style.scss'
import logo from '../../assets/img/1.png'
import logo_header from '../../assets/img/logo.png'


class InscriptionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:""
        }

        this.getUser()
        console.log(this.state)
    }

    getUser = () => {
        fetch('http://localhost:9000/')

        .then((res) => {
            return res.text()
        
        })
        .then((data) => {this.setState({
            user:data
        }
        )
        console.log(this.state);

    })
    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <button onClick={() => document.getElementById('inscription-wrapper').style.display="block"} className="inscription-button">
                    Inscrivez-vous
                </button>

                <div id="inscription-wrapper" className="modal">
                    <form className="modal-content animate" action="">
                        <div className="imgcontainer">
                            <span onClick={() => document.getElementById('inscription-wrapper').style.display='none'} className="close" title="Close PopUp">&nbsp;x</span>
                            <img src={logo} alt="Avatar" className="avatar" />
                            <h1 style={{textAlign: "center"}}>Veuillez-vous inscrire</h1>
                        </div>

                        <div className="container">
                            <input type="text" placeholder="Nom" name="nom" />
                            <input type="text" placeholder="Prénom" name="prenom" />
                            <input type="text" placeholder="Société" name="societe" />
                            <input type="text" placeholder="Siret" name="siret" />
                            <input type="email" placeholder="Email" name="email" />
                            <input type="text" placeholder="Téléphone" name="telephone" />
                            <select>
                                <option>Statut de la société</option>
                                <option>SAS</option>
                                <option>SASU</option>
                                <option>Auto-entrepreneur</option>
                                <option>EURL</option>
                                <option>SARL</option>
                            </select>
                            <br/>
                            <select>
                                <option>Profil</option>
                                <option>Développeur Back</option>
                                <option>Front</option>
                                <option>Data Analyst</option>
                                <option>QA</option>
                            </select>
                            <input type="password" placeholder="Veuillez renseigner un mot de passe" name="psw" />
                            <input type="password" placeholder="Veuillez confirmer le mot de passe" name="conf-psw" />        
                            <button className="submit-button" type="submit">Enregistrer</button>     
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default InscriptionForm
