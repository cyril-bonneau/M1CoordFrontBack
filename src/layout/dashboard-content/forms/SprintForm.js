import React, { Component } from 'react'
import '../../../assets/sass/dashboard/style.scss'

class SprintForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label className="label-input">Dénomination sociale</label>
                        <input className="input-denomination" type="text" name="" placeholder="Veullez renseigner un titre..." />
                    </div>
                    <div>
                        <label className="label-input">Date de début</label>
                        <input className="label-input-jour" type="number" name="" placeholder="jour" />
                        <input className="label-input-mois" type="text" name="" placeholder="mois" />
                        <input className="label-input-annee" type="number" name="" placeholder="année" />
                    </div>
                    <div>
                        <label className="label-input">Date de fin</label>
                        <input className="label-input-jour-second" type="number" name="" placeholder="jour" />
                        <input className="label-input-mois-second" type="text" name="" placeholder="mois" />
                        <input className="label-input-annee-second" type="number" name="" placeholder="année" />
                    </div>
                    <div>
                        <label className="label-input">Statut</label>
                        <select className="label-select">
                            <option>Veuillez selectionner un statut</option>
                            <option>xxx</option>
                            <option>xxx</option>
                        </select>
                    </div>
                    <br/>
                    <input type="submit" name="" value="Enregistrer" />
                    <input type="reset" name="" value="Annuler"/>
                </form>
            </div>
        )
    }
}

export default SprintForm
