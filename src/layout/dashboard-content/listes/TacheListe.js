import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Tache = props => (
    <tr>
        <th>{ props.tache.taskName }</th>
        <th></th>
        <td>{ props.tache.taskDescription }</td>
        <td>{ props.tache.taskStatus }</td>
        <td>{ props.tache.taskTime }</td>
        <td><a href="#">Supprimer</a></td>
        {/*<td>
            <Link to={"/edit/"+props.client._id}>edit</Link> | <a href="#" onClick={() => { props.deleteClient(props.client._id) }}>delete</a>
        </td>*/}
    </tr>
)

class TacheList extends Component {
    constructor(props) {
        super(props);

        this.deleteTache = this.deleteTache.bind(this)

        this.state = {taches: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/tasks/')
        .then(response => {
            this.setState({
                taches: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    deleteTache(id) {
        /**axios.delete('http://localhost:5000/clients/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          clients: this.state.clients.filter(el => el._id !== id)
        })*/
    }

    tacheliste() {
        return this.state.taches.map(currenttache => {
            return <Tache tache={currenttache} key={currenttache._id} />
        })
    }

    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Titre tache</th>
                            <th scope="col">Sprint</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Durée</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.tacheliste() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TacheList