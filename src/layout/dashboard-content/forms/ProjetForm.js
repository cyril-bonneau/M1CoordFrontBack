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
                    <div>
                        <label>Titre : </label>
                            <input type="text" name="Titre"/>
                        <label>Montant du devis : </label>
                            <input type="number" name="Montant"/>
                        <label>Délai de réalisation : </label>
                            <input type="number" name="Delai"/>
                        <label>Date début : </label>
                            <input type="date" name="DateDebut"/>
                        <label>Date fin</label>
                            <input type="date" name="DateFin"/>
                        <label>Status : </label>
                            <input type="radio" id="attente" name="attente"/> 
                            <div className="toto">
                                Attente
                            </div>  
                            <input type="radio" id="cours" name="cours"/>
                            <div className="toto">
                                En cours
                            </div> 
                            <input type="radio" id="fini" name="fini"/>
                            <div className="toto">
                                Terminé
                            </div>
                        <br></br><br></br>
                        <label>stacks utilisé :</label>
                            <input type="text" name="stack"></input>
                        <label>Cout horaire jour : </label>
                            <input type="number" name="PrixJour"></input>
                        </div>
                            <input type="submit" name="" value="Enregistrer" />
                            <input type="reset" name="" value="Annuler"/>
                </form>
            </div>
        )
    }
}

export default ProjetForm
