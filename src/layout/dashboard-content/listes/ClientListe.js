import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Client = props => (
    <tr>
        <th>{ props.client.clientDenomination }</th>
        <td>{ props.client.clientAdresse }</td>
        <td>{ props.client.clientSecondName } { props.client.clientFirstName }</td>
        <td>{ props.client.clientMail }</td>
        <td><a href="#">Supprimer</a></td>
        {/*<td>
            <Link to={"/edit/"+props.client._id}>edit</Link> | <a href="#" onClick={() => { props.deleteClient(props.client._id) }}>delete</a>
        </td>*/}
    </tr>
)

class ClientListe extends Component {
    constructor(props) {
        super(props);

        this.deleteClient = this.deleteClient.bind(this)

        this.state = {clients: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/client/')
        .then(response => {
            this.setState({
                clients: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    deleteClient(id) {
        /**axios.delete('http://localhost:5000/clients/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          clients: this.state.clients.filter(el => el._id !== id)
        })*/
    }

    clientListe() {
        return this.state.clients.map(currentclient => {
            return <Client client={currentclient} key={currentclient._id} />
        })
    }

    render() {
        return (
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Dénomination sociale</th>
                            <th scope="col">Adresse</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.clientListe() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ClientListe