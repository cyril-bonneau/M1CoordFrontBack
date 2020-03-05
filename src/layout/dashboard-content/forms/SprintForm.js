import React, { Component } from 'react'
import '../../../assets/sass/dashboard/style.scss'

class SprintForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label className="label-input">Dénomination sociale</label>
                        <input type="text" name="" placeholder="Veullez renseigner un titre..." style={{float: "left",width: "70%"}} />
                    </div>
                    <div>
                        <label className="label-input">Date de début</label>
                        <input className="label-input-rue" type="number" name="" placeholder="jour" style={{float: "left", marginLeft: "11%", width: "15%", marginTop: "1%"}} />
                        <input className="label-input-ville" type="text" name="" placeholder="mois" style={{width: "25%",float: "left",height: "37px"}} />
                        <input className="label-input-code" type="number" name="" placeholder="année" style={{float: "left",marginTop: "1%",width: "23%"}} />
                    </div>
                    <div>
                        <label className="label-input">Date de fin</label>
                        <input className="label-input-rue" type="number" name="" placeholder="jour" style={{float: "left", marginLeft: "14%", width: "15%", marginTop: "1%"}} />
                        <input className="label-input-ville" type="text" name="" placeholder="mois" style={{width: "25%",float: "left",height: "37px"}} />
                        <input className="label-input-code" type="number" name="" placeholder="année" style={{float: "left",marginTop: "1%",width: "23%"}} />
                    </div>
                    <div>
                        <label className="label-input">Statut</label>
                        <select style={{width: "70%",marginLeft: "17%"}}>
                            <option>Veuillez selectionner un statut</option>
                            <option>xxx</option>
                            <option>xxx</option>
                        </select>
                    </div>
                    <br/>
                    <input type="submit" name="" value="Enregistrer" />
                </form>
            </div>
        )
    }
}

export default SprintForm
