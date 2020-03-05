import React, { Component } from 'react'

class TacheForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label className="label-input">Titre du sprint</label>
                        <input type="text" name="" placeholder="Veullez renseigner un titre..." style={{float: "left",width: "64%",marginLeft: "16%"}} />
                    </div>
                    <div>
                        <label className="label-input">Temps de réalisation (heure)</label>
                        <select style={{width: "64%",marginLeft: "2%"}}>
                            <option>Veuillez selectionner un temps</option>
                            <option>xxx</option>
                            <option>xxx</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-input">Statut</label>
                        <select style={{width: "64%",marginLeft: "23%"}}>
                            <option>Veuillez selectionner un statut</option>
                            <option>xxx</option>
                            <option>xxx</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-input">Description</label>
                        <textarea placeholder="veuillez saisir une description" style={{position: "absolute",left: "53%",width: "42%"}}></textarea>
                    </div>
                    <input type="submit" name="" value="Enregistrer" style={{marginTop: "10%"}} />
                </form>
            </div>
        )
    }
}

export default TacheForm
