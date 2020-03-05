import React, { Component } from 'react'

class TacheForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label className="label-input">Titre du sprint</label>
                        <input className="input-titre" type="text" name="" placeholder="Veullez renseigner un titre..." />
                    </div>
                    <div>
                        <label className="label-input">Temps de réalisation (heure)</label>
                        <select className="label-select-first">
                            <option>Veuillez selectionner un temps</option>
                            <option>xxx</option>
                            <option>xxx</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-input">Statut</label>
                        <select className="label-select-second">
                            <option>Veuillez selectionner un statut</option>
                            <option>xxx</option>
                            <option>xxx</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-input">Description</label>
                        <textarea className="textarea-description" placeholder="veuillez saisir une description"></textarea>
                    </div>
                    <input type="submit" name="" value="Enregistrer" style={{marginTop: "10%"}} />
                </form>
            </div>
        )
    }
}

export default TacheForm
