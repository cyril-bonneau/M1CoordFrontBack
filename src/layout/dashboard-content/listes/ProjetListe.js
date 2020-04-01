import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Projet = props => (
    <tr>
        <th>{ props.projet.projectTitle }</th>
        <td></td>
        <td>{ props.projet.projectStartDate  }</td>
        <td>{ props.projet.projectEndDate }</td>
        <td>{ props.projet.projectDelay }</td>
        <td>{ props.projet.projectStatus }</td>
        <td>{ props.projet.projectDevise }</td>
        <td>{ props.projet.projectStack }</td>
        <td>{ props.projet.projectCout }</td>
        
        <td><a href="#">Supprimer</a></td>
        {/*<td>
            <Link to={"/edit/"+props.client._id}>edit</Link> | <a href="#" onClick={() => { props.deleteClient(props.client._id) }}>delete</a>
        </td>*/}
    </tr>
)

class ProjetList extends Component {
    constructor(props) {
        super(props);

        this.deleteProjet = this.deleteProjet.bind(this)

        this.state = {projets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/projet/')
        .then(response => {
            this.setState({
                projets: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    deleteProjet(id) {
        /**axios.delete('http://localhost:5000/clients/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          clients: this.state.clients.filter(el => el._id !== id)
        })*/
    }

    projetListe() {
        return this.state.projets.map(currentprojet => {
            return <Projet projet={currentprojet} key={currentprojet._id} />
        })
    }

    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Titre projet</th>
                            <th scope="col">Nom client</th>
                            <th scope="col">Date début</th>
                            <th scope="col">Date Fin</th>
                            <th scope="col">Durée</th>
                            <th scope="col">Status</th>
                            <th scope="col">Prix devis</th>
                            <th scope="col">Stack</th>
                            <th scope="col">Cout horaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.projetListe() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProjetList