import React, { Component } from 'react'
import e from 'cors'
import axios from 'axios';

const Client = props => (
    <option value={props.client._id}>{ props.client.clientSecondName } { props.client.clientFirstName }</option>
)

class ProjetForm extends Component {
    constructor(props) {
        super(props)

        this.onChangeClient = this.onChangeClient.bind(this);
        this.onChangeTitreProjet = this.onChangeTitreProjet.bind(this);
        this.onChangeMontantDevis = this.onChangeMontantDevis.bind(this);
        this.onChangeDelai = this.onChangeDelai.bind(this);
        this.onChangeDateDebutProjet = this.onChangeDateDebutProjet.bind(this);
        this.onChangeDateFinProjet = this.onChangeDateFinProjet.bind(this);
        this.onChangeStatusProjet = this.onChangeStatusProjet.bind(this);
        this.onChangeStack = this.onChangeStack.bind(this);
        this.onChangeCout = this.onChangeCout.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            clients:[],
            clientID:'',
            projectTitle:'',
            projectDevise:'',
            projectDelay:'',
            projectStartDate:'',
            projectEndDate:'',
            projectStatus:'',
            projectStack:'',
            projectCout:''
        };
    }

    onChangeClient(e) {
        
        this.setState({
            clientID: e.target.value
        })
    }
    onChangeTitreProjet(e) {
        
        this.setState({
            projectTitle: e.target.value
        })
    }
    onChangeMontantDevis(e) {
        this.setState({
            projectDevise: e.target.value
        })
    }
    onChangeDelai(e) {
        
        this.setState({
            projectDelay: e.target.value
        })
    }
    onChangeDateDebutProjet(e) {
        this.setState({
            projectStartDate: e.target.value
        })
    }
    onChangeDateFinProjet(e) {
        this.setState({
            projectEndDate: e.target.value
        })
    }
    onChangeStatusProjet(e) {
        this.setState({
            projectStatus: e.target.value
        })
    }
    onChangeStack(e) {
        this.setState({
            projectStack: e.target.value
        })
    }
    onChangeCout(e) {
        this.setState({
            projectCout: e.target.value
        })
    }
    onSubmit(e) {

        //e.preventdefault();
        
        const project = {
            clientID: this.state.clientID,
            projectTitle: this.state.projectTitle,
            projectDevise: this.state.projectDevise,
            projectDelay: this.state.projectDelay,
            projectStartDate: this.state.projectStartDate,
            projectEndDate: this.state.projectEndDate,
            projectStatus: this.state.projectStatus,
            projectStack: this.state.projectStack,
            projectCout: this.state.projectCout
        }

        console.log(project);

        

        axios.post('http://localhost:3001/api/v1/projet', project).then(res => console.log(res.data));
        
        

        this.setState({
            clientID:'',
            projectTitle:'',
            projectDevise:'',
            projectDelay:'',
            projectStartDate:'',
            projectEndDate:'',
            projectStatus:'',
            projectStack:'',
            projectCout:''
        })

       // this.refreshPage();
    }

    refreshPage(){ 
        window.location.reload(); 
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

    clientListe() {
        return this.state.clients.map(currentclient => {
            return <Client client={currentclient} key={currentclient._id} />
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div class="form-row">
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="SelectClient">Client</label>
                            </div>
                            <div className="form-group col-md-9">
                            <select className="form-control" id="selectClient" onChange={this.onChangeClient} value={this.state.clientID}>
                                   {this.clientListe()}
                            </select>
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputTitreProjet">Titre</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputTitreProjet" placeholder="Veullez saisir un titre de porjet..." value={this.state.projectTitle} onChange={this.onChangeTitreProjet} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputMontantDevis">Montant devis</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="number" className="form-control" id="inputMontantDevis" placeholder="Veullez saisir le montant du devis..." value={this.state.projectDevise} onChange={this.onChangeMontantDevis} style={{marginLeft: "26px",width: "90%"}} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputDelai">Délai de réalisation</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="number" className="form-control" id="inputDelai" placeholder="Veullez saisir le délai du projet..." value={this.state.projectDelay} onChange={this.onChangeDelai} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputDateDebutProjet">Date de début</label>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="date" className="form-control" id="inputDateDebutProjet" value={this.state.projectStartDate} onChange={this.onChangeDateDebutProjet} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputDateFinProjet">Date de fin</label>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="date" className="form-control" id="inputDateFinProjet" value={this.state.projectEndDate} onChange={this.onChangeDateFinProjet}  />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputStatusProjet">Status</label>
                            </div>
                            <div className="form-group col-md-8">
                                <select className="form-control" id="selectClient" onChange={this.onChangeStatusProjet} value={this.state.projectStatus} >
                                    <option value="Attente">Attente</option>
                                    <option value="EnCours">En cours</option>
                                    <option value="Termine">Terminé</option>
                                </select>
                            </div>
                        </div>   
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputStack">Stacks utilisé</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputStack" placeholder="Veullez saisir la stack utilisée..." value={this.state.projectStack} onChange={this.onChangeStack} />
                            </div>
                        </div>   
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputCout">Coût horaire (€)</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="number" className="form-control" id="inputCout" placeholder="Veullez saisir un cout horaire..." value={this.state.projectCout} onChange={this.onChangeCout} style={{marginLeft: "26px",width: "90%"}} />
                            </div>
                        </div>                 
                    </div>
                    <input type="submit" value="save"/>
                    {/*<button type="submit" class="btn btn-success">Enregistrer</button>*/}
                    <button type="reset" class="btn btn-danger">Annuler</button>
                </form>
            </div>
        )
    }
}

export default ProjetForm
