import React, { Component } from 'react'

class ClientForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label style={{float: "left",marginTop: "2%"}}>Dénomination sociale</label>
                        <input type="text" name="" placeholder="Veullez renseigner un titre..." style={{float: "left",width: "70%"}} />
                    </div>
                    <br/>
                    <div>
                        <label style={{float: "left",marginTop: "2%"}}>Adresse</label>
                        <input type="number" name="" placeholder="Rue" style={{float: "left", marginLeft: "21%", width: "15%", marginTop: "1%"}} />
                        <input type="text" name="" placeholder="Ville" style={{width: "20%",float: "left",height: "37px"}} />
                        <input type="number" name="" placeholder="Code" style={{float: "left",marginTop: "1%",width: "23%"}} />
                    </div>
                    <br/>
                    <div>
                        <label style={{float: "left",marginTop: "2%"}}>Nom</label>
                        <input type="text" name="" placeholder="Votre nom" style={{float: "left",width: "70%"}} />
                    </div>
                    <label>Prénom</label><input type="text" name="" placeholder="Votre prénom" />
                    <label>Téléphone</label><input type="text" name="" placeholder="Votre téléphone" />
                    <label>Email</label><input type="text" name="" placeholder="Votre email de contact" />
                    <br/>
                    <input type="submit" name="" value="Enregistrer" />
                </form>
            </div>
        )
    }
}

export default ClientForm
