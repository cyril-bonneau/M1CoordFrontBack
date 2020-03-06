import React, { Component } from 'react'
import '../../../assets/sass/dashboard/style.scss'

class ClientForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Dénomination sociale</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez saisir une dénomination sociale..." />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Adresse</label>
                            </div>
                            <div className="form-group col-md-2">
                                <input type="text" className="form-control" id="inputCity" placeholder="Rue..." />
                            </div>
                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="inputCity" placeholder="Ville..." style={{marginLeft: "13%"}} />
                            </div>
                            <div className="form-group col-md-2">
                                <input type="text" className="form-control" id="inputZip" placeholder="Code..." style={{width: "95%"}} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Nom</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Votre nom..." />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Prénom</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Votre prénom..." />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Téléphone</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Votre téléphone..." />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Email</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Votre Email..." />
                            </div>
                        </div>                       
                    </div>
                    <button type="submit" class="btn btn-success">Enregistrer</button>
                    <button type="submit" class="btn btn-danger">Annuler</button>
                </form>
            </div>
        )
    }
}

export default ClientForm
