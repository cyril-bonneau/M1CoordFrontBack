import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Sprint = props => (
    <tr>
        <th>{ props.sprint.sprintTitle }</th>
        <th></th>
        <td>{ props.sprint.sprintStartDate }</td>
        <td>{ props.sprint.sprintEndDate }</td>
        <td>{ props.sprint.sprintStatus }</td>
        <td><a href="#">Supprimer</a></td>
        {/*<td>
            <Link to={"/edit/"+props.client._id}>edit</Link> | <a href="#" onClick={() => { props.deleteClient(props.client._id) }}>delete</a>
        </td>*/}
    </tr>
)

class SprintList extends Component {
    constructor(props) {
        super(props);

        this.deleteSprint = this.deleteSprint.bind(this)

        this.state = {sprints: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/sprint/')
        .then(response => {
            this.setState({
                sprints: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    deleteSprint(id) {
        /**axios.delete('http://localhost:5000/clients/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          clients: this.state.clients.filter(el => el._id !== id)
        })*/
    }

    sprintListe() {
        return this.state.sprints.map(currentsprint => {
            return <Sprint sprint={currentsprint} key={currentsprint._id} />
        })
    }

    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Titre sprint</th>
                            <th scope="col">Projet</th>
                            <th scope="col">Date debut</th>
                            <th scope="col">Date fin</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.sprintListe() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SprintList