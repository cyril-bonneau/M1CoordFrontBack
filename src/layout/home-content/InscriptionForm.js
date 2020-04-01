import React, { Component } from 'react'
import '../../assets/sass/home/style.scss'
import logo from '../../assets/img/1.png'
import logo_header from '../../assets/img/logo.png'
import axios from 'axios';

class InscriptionForm extends Component {
    constructor(props) {
        super(props)

        //this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
        this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
        this.onChangeUserSociety = this.onChangeUserSociety.bind(this);
        this.onChangeUserSiret = this.onChangeUserSiret.bind(this);
        this.onChangeUserMail = this.onChangeUserMail.bind(this);
        this.onChangeUserTelephone = this.onChangeUserTelephone.bind(this);
        this.onChangeUserStatus = this.onChangeUserStatus.bind(this);
        this.onChangeUserProfil = this.onChangeUserProfil.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            //userName: '',
            userFirstName: '',
            userLastName: '',
            userSociety: '',
            userSiret: '',
            userMail: '',
            userTelephone: '',
            userStatus: '',
            userProfil: '',
            userPassword: ''  
        }
    }

    onChangeUserPassword(e) {
        this.setState({
            userPassword: e.target.value
        })
    }

    onChangeUserProfil(e) {
        this.setState({
            userProfil: e.target.value
        })
    }

    onChangeUserStatus(e) {
        this.setState({
            userStatus: e.target.value
        })
    }

    onChangeUserTelephone(e) {
        this.setState({
            userTelephone: e.target.value
        })
    }

    onChangeUserMail(e) {
        this.setState({
            userMail: e.target.value
        })
    }

    onChangeUserSiret(e) {
        this.setState({
            userSiret: e.target.value
        })
    }

    onChangeUserSociety(e) {
        this.setState({
            userSociety: e.target.value
        })
    }

    onChangeUserLastName(e) {
        this.setState({
            userLastName: e.target.value
        })
    }

    onChangeUserFirstName(e) {
        this.setState({
            userFirstName: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const userName = this.state.userFirstName + " " + this.state.userLastName;
        //console.log(userName);

        //alert("teste");

        const user = {
            userName: userName,
            userSociety: this.state.userSociety,
            userSiret: this.state.userSiret,
            userMail: this.state.userMail,
            userTelephone: this.state.userTelephone,
            userStatus: this.state.userStatus,
            userProfil: this.state.userProfil,
            userPassword: this.state.userPassword
        }

        //console.log(user)

        axios.post('http://localhost:3001/api/v1/users/', user).then(res => console.log(res.data));
        /**axios.post('http://localhost:3001/api/v1/users', user).then(res => { 
            if(res) {
                //alert(res.json)
                //this.props.history.push('/')
                window.location.href = '/'
            }
        });*/

        /**try {
            axios.post('http://localhost:3001/api/v1/user', user).then(res => console.log(res.data));
        }catch(e) {
            if(e.res.data.message);
        }*/
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
                    <form className="modal-content animate" action="" onSubmit={this.onSubmit}>
                        <div className="imgcontainer">
                            <span onClick={() => document.getElementById('inscription-wrapper').style.display='none'} className="close" title="Close PopUp">&nbsp;x</span>
                            <img src={logo} alt="Avatar" className="avatar" />
                            <h1 style={{textAlign: "center"}}>Veuillez-vous inscrire</h1>
                        </div>

                        <div className="container">
                            <input type="text" placeholder="Nom" name="nom" value={this.state.userFirstName} onChange={this.onChangeUserFirstName} />
                            <input type="text" placeholder="Prénom" name="prenom" value={this.state.userLastName} onChange={this.onChangeUserLastName} />
                            <input type="text" placeholder="Société" name="societe" value={this.state.userSociety} onChange={this.onChangeUserSociety} />
                            <input type="text" placeholder="Siret" name="siret" value={this.state.userSiret} onChange={this.onChangeUserSiret} />
                            <input type="email" placeholder="Email" name="email" value={this.state.userMail} onChange={this.onChangeUserMail} />
                            <input type="text" placeholder="Téléphone" name="telephone" value={this.state.userTelephone} onChange={this.onChangeUserTelephone} />
                            <select value={this.state.userStatus} onChange={this.onChangeUserStatus}>
                                <option>Statut de la société</option>
                                <option>SAS</option>
                                <option>SASU</option>
                                <option>Auto-entrepreneur</option>
                                <option>EURL</option>
                                <option>SARL</option>
                            </select>
                            <br/>
                            <select value={this.state.userProfil} onChange={this.onChangeUserProfil}>
                                <option>Profil</option>
                                <option>Développeur Back</option>
                                <option>Front</option>
                                <option>Data Analyst</option>
                                <option>QA</option>
                            </select>
                            <input type="password" placeholder="Veuillez renseigner un mot de passe" name="psw" value={this.state.userPassword} onChange={this.onChangeUserPassword} />
                            {/*<input type="password" placeholder="Veuillez confirmer le mot de passe" name="conf-psw" />*/}        
                            <button className="submit-button" type="submit">Enregistrer</button>     
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default InscriptionForm
