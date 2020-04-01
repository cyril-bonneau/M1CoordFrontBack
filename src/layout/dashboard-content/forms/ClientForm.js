import React, { Component } from 'react'
import '../../../assets/sass/dashboard/style.scss'
import axios from 'axios';

class ClientForm extends Component {
    constructor(props) {
        super(props)

        this.onChangeClientDenomination = this.onChangeClientDenomination.bind(this);
        this.onChangeClientAdresseRue = this.onChangeClientAdresseRue.bind(this);
        this.onChangeClientAdresseVille = this.onChangeClientAdresseVille.bind(this);
        this.onChangeClientAdresseCode = this.onChangeClientAdresseCode.bind(this);
        this.onChangeClientFirstName = this.onChangeClientFirstName.bind(this);
        this.onChangeClientSecondName = this.onChangeClientSecondName.bind(this);
        this.onChangeClientTelephone = this.onChangeClientTelephone.bind(this);
        this.onChangeClientMail = this.onChangeClientMail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            clientDenomination: '',
            clientAdresseRue: '',
            clientFirstName: '',
            clientSecondName: '',
            clientTelephone: '',
            clientMail: ''
        }

    }

    onChangeClientDenomination(e) {
        this.setState({
            clientDenomination: e.target.value
        })
    }

    onChangeClientAdresseRue(e) {
        this.setState({
            clientAdresseRue: e.target.value
        })
    }

    onChangeClientAdresseVille(e) {
        this.setState({
            clientAdresseVille: e.target.value
        })
    }

    onChangeClientAdresseCode(e) {
        this.setState({
            clientAdresseCode: e.target.value
        })
    }

    onChangeClientFirstName(e) {
        this.setState({
            clientFirstName: e.target.value
        })
    }

    onChangeClientSecondName(e) {
        this.setState({
            clientSecondName: e.target.value
        })
    }

    onChangeClientTelephone(e) {
        this.setState({
            clientTelephone: e.target.value
        })
    }

    onChangeClientMail(e) {
        this.setState({
            clientMail: e.target.value
        })
    }

    onSubmit(e) {
        //e.preventDefault();
        const clientAdresse = this.state.clientAdresseRue +" "+this.state.clientAdresseVille +", "+this.state.clientAdresseCode;

        const client = {
            clientDenomination: this.state.clientDenomination,
            clientAdresse: clientAdresse,
            clientFirstName: this.state.clientFirstName,
            clientSecondName: this.state.clientSecondName,
            clientTelephone: this.state.clientTelephone,
            clientMail: this.state.clientMail
        }

        console.log(client);

        axios.post('http://localhost:3001/api/v1/client', client).then(res => console.log(res.data));

        

        this.setState({
            clientDenomination: '',
            clientAdresse: '',
            clientFirstName: '',
            clientSecondName: '',
            clientTelephone: '',
            clientMail: ''
        })

        //this.refreshPage();
    }

    refreshPage(){ 
        window.location.reload(); 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Dénomination sociale</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input required type="text" className="form-control" value={this.state.clientDenomination} onChange={this.onChangeClientDenomination} placeholder="Veullez saisir une dénomination sociale..." />
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Adresse</label>
                            </div>
                            <div className="form-group col-md-2">
                                <input required type="text" className="form-control" value={this.state.clientAdresseRue} onChange={this.onChangeClientAdresseRue} placeholder="Rue..." />
                            </div>
                            <div className="form-group col-md-4">
                                <input required type="text" className="form-control" value={this.state.clientAdresseVille} onChange={this.onChangeClientAdresseVille} placeholder="Ville..." style={{marginLeft: "13%"}} />
                            </div>
                            <div className="form-group col-md-2">
                                <input required type="text" className="form-control" value={this.state.clientAdresseCode} onChange={this.onChangeClientAdresseCode} placeholder="Code..." style={{width: "95%"}} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Nom</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input required type="text" className="form-control" value={this.state.clientFirstName} onChange={this.onChangeClientFirstName} placeholder="Votre nom..." />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Prénom</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input required type="text" className="form-control" value={this.state.clientSecondName} onChange={this.onChangeClientSecondName} placeholder="Votre prénom..." />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Téléphone</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input required type="number" className="form-control" value={this.state.clientTelephone} onChange={this.onChangeClientTelephone} placeholder="Votre téléphone..." style={{marginLeft: "4%",marginTop: "1%",width: "91%"}} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Email</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input required type="text" className="form-control" value={this.state.clientMail} onChange={this.onChangeClientMail} placeholder="Votre Email..." />
                            </div>
                        </div>                       
                    </div>
                    <button type="submit" class="btn btn-success">Enregistrer</button>
                    <button type="reset" class="btn btn-danger">Annuler</button>
                </form>
            </div>
        )
    }
}

export default ClientForm
