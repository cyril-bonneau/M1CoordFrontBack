import React, { Component } from 'react'


class ProjetForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Titre</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez saisir une dénomination sociale..." />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Montant du devis</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="number" className="form-control" id="inputDenomination4" placeholder="Veullez saisir une dénomination sociale..." style={{marginLeft: "26px",width: "90%"}} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Délai de réalisation</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez saisir une dénomination sociale..." />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Date de début</label>
                            </div>
                            <div className="form-group col-md-2">
                                <input type="text" className="form-control" id="inputCity" placeholder="Jour..." />
                            </div>
                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="inputCity" placeholder="Mois..." style={{marginLeft: "13%"}} />
                            </div>
                            <div className="form-group col-md-2">
                                <input type="text" className="form-control" id="inputZip" placeholder="Année..." style={{width: "95%"}} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Date de fin</label>
                            </div>
                            <div className="form-group col-md-2">
                                <input type="text" className="form-control" id="inputCity" placeholder="Jour..." />
                            </div>
                            <div className="form-group col-md-4">
                                <input type="text" className="form-control" id="inputCity" placeholder="Mois..." style={{marginLeft: "13%"}} />
                            </div>
                            <div className="form-group col-md-2">
                                <input type="text" className="form-control" id="inputZip" placeholder="Année..." style={{width: "95%"}} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Status</label>
                            </div>
                            <div className="form-group col-md-8" style={{marginLeft: "8%"}}>
                                <input type="radio" id="attente" name="attente"/> 
                                <div className="toto" style={{marginLeft: "4%"}}>
                                    Attente
                                </div>  
                                <input type="radio" id="cours" name="cours"/>
                                <div className="toto" style={{marginLeft: "4%"}}>
                                    En cours
                                </div> 
                                <input type="radio" id="fini" name="fini"/>
                                <div className="toto" style={{marginLeft: "4%"}}>
                                    Terminé
                                </div>
                            </div>
                        </div>   
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Stacks utilisé</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez saisir une dénomination sociale..." />
                            </div>
                        </div>   
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Coût horaire (€)</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="number" className="form-control" id="inputDenomination4" placeholder="Veullez saisir une dénomination sociale..." style={{marginLeft: "26px",width: "90%"}} />
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

export default ProjetForm
