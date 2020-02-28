import React, { Component } from 'react'
import '../../assets/sass/dashboard/style.scss'

class FormAddClient extends Component {
    render(props) {
        return (
            <div id="formAddClient">
                <form className="FormaddClient" action="">
                    <label for="Social">Dénomination social :</label>
                    <input type="text" id="Social"></input>

                    <label for="Adresse">Adresse :</label>
                    <input type="text" for="Adresse" id="Adresse"></input>

                    <label for="Ville">Ville :</label>
                    <input for="Ville" type="text" id="Ville"></input>

                    <label for="CP">Code postale :</label>
                    <input for="CP" type="number" min="00001" max="99999" id="CP"></input>

                    <label for="Name">Nom :</label>
                    <input for="Name" type="text" id="Name"></input>

                    <label for="Surname">Prénom :</label>
                    <input for="Surname" id="Surname" type="text"></input>

                    <input type="submit" value="Valider"></input>
                    <input type="reset" value="Annuler"></input>
                </form>
                
            </div>
        )
    }
}

export default FormAddClient