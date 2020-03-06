import React, { Component } from 'react'

class TacheForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Titre du sprint</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez renseigner un titre..." />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Temps de réalisation (heure)</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez selectionner un temps..." />
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
                                <label for="inputEmail4">Dénomination sociale</label>
                            </div>
                            <div className="form-group col-md-9">
                                <textarea className="form-control" placeholder="veuillez ajouter une description..." style={{marginLeft: "26px",width: "90%"}}></textarea>
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

export default TacheForm
