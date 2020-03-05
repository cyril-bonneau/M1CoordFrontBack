import React, { Component } from 'react'
import '../../../assets/sass/dashboard/style.scss'

class ClientForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label className="label-input">Dénomination sociale</label>
                        <input type="text" name="" placeholder="Veullez renseigner un titre..." style={{float: "left",width: "70%"}} />
                    </div>
                    <div>
                        <label className="label-input">Adresse</label>
                        <input className="label-input-rue" type="number" name="" placeholder="Rue" style={{float: "left", marginLeft: "16%", width: "15%", marginTop: "1%"}} />
                        <input className="label-input-ville" type="text" name="" placeholder="Ville" style={{width: "25%",float: "left",height: "37px"}} />
                        <input className="label-input-code" type="number" name="" placeholder="Code" style={{float: "left",marginTop: "1%",width: "23%"}} />
                    </div>
                    <div>
                        <label className="label-input">Nom</label>
                        <input type="text" name="" placeholder="Votre nom" style={{float: "left",width: "70%",marginLeft: "19%"}} />
                    </div>
                    <div>
                        <label className="label-input">Prénom</label>
                        <input type="text" name="" placeholder="Votre prénom" style={{float: "left",width: "70%",marginLeft: "16%"}} />
                    </div>
                    <div>
                        <label className="label-input">Téléphone</label>
                        <input type="text" name="" placeholder="Votre téléphone" style={{float: "left",width: "70%",marginLeft: "13%"}} />
                    </div>
                    <div>
                        <label className="label-input">Email</label>
                        <input type="text" name="" placeholder="Votre email de contact" style={{float: "left",width: "70%",marginLeft: "18%"}} />
                    </div>
                    <br/>
                    <input type="submit" name="" value="Enregistrer" />
                </form>
            </div>
        )
    }
}

export default ClientForm
