import React, { Component } from 'react'
import '../../../assets/sass/dashboard/style.scss'

class ClientForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label className="label-input">Dénomination sociale</label>
                        <input className="input-denomination" type="text" name="" placeholder="Veullez saisir une dénomination sociale..." />
                    </div>
                    <div>
                        <label className="label-input">Adresse</label>
                        <input className="label-input-rue" type="number" name="" placeholder="Rue" />
                        <input className="label-input-ville" type="text" name="" placeholder="Ville" />
                        <input className="label-input-code" type="number" name="" placeholder="Code" />
                    </div>
                    <div>
                        <label className="label-input">Nom</label>
                        <input className="input-nom" type="text" name="" placeholder="Votre nom" />
                    </div>
                    <div>
                        <label className="label-input">Prénom</label>
                        <input className="input-prenom" type="text" name="" placeholder="Votre prénom" />
                    </div>
                    <div>
                        <label className="label-input">Téléphone</label>
                        <input className="input-telephone" type="text" name="" placeholder="Votre téléphone" />
                    </div>
                    <div>
                        <label className="label-input">Email</label>
                        <input className="input-email" type="text" name="" placeholder="Votre email de contact" />
                    </div>
                    <br/>
                    <input type="submit" name="" value="Enregistrer" />
                </form>
            </div>
        )
    }
}

export default ClientForm
