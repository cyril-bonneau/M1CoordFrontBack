import React, { Component } from 'react'
import '../../../assets/sass/dashboard/style.scss'
import axios from 'axios';

const Projet = props => (
    <option value={props.projet._id}>{props.projet.projectTitle}</option>
)

class SprintForm extends Component {
    constructor(props)
    {
        super(props)

        this.onChangeProjet = this.onChangeProjet.bind(this)
        this.onChangeTitreSprint = this.onChangeTitreSprint.bind(this)
        this.onChangeDateDebutSprint = this.onChangeDateDebutSprint.bind(this)
        this.onChangeDateFinSprint = this.onChangeDateFinSprint.bind(this)
        this.onChangeStatusSprint = this.onChangeStatusSprint.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            projets: [],
            ProjetID:'',
            sprintTitle:'',
            sprintStartDate:'',
            sprintEndDate:'',
            sprintStatus:''
        };
    }

    onChangeProjet(e) {
        this.setState({
            ProjetID: e.target.value
        }) 
    }
    onChangeTitreSprint(e) {
        this.setState({
            sprintTitle: e.target.value
        })
    }
    onChangeDateDebutSprint(e) {
        this.setState({
            sprintStartDate: e.target.value
        })
    }
    onChangeDateFinSprint(e) {
        this.setState({
            sprintEndDate: e.target.value
        })
    }
    onChangeStatusSprint(e) {
        this.setState({
            sprintStatus: e.target.value
        })
    }
    onSubmit(e) {
       // e.preventdefault();

        const Sprint = {
            ProjetID: this.state.ProjetID,
            sprintTitle: this.state.sprintTitle,
            sprintStartDate: this.state.sprintStartDate,
            sprintEndDate: this.state.sprintEndDate,
            sprintStatus: this.state.sprintStatus
        }
        console.log(Sprint);

        axios.post('http://localhost:3001/api/v1/sprint', Sprint).then(res => console.log(res.data));

        this.setState=({
            ProjetID:'',
            sprintTitle:'',
            sprintStartDate:'',
            sprintEndDate:'',
            sprintStatus:''
        })

      //  this.refreshPage();
    }

    /**refreshPage(){ 
        window.location.reload(); 
    }*/

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/projet')
        .then(response => {
            this.setState({
                projets: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    projetListe() {
        return this.state.projets.map(currentprojet => {
            return <Projet projet={currentprojet} key={currentprojet._id} />
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="SelectProjet">Projet</label>
                            </div>
                            <div className="form-group col-md-9">
                                <select className="form-control" id="SelectProjet" onChange={this.onChangeProjet} value={this.state.ProjetID}>
                                    {this.projetListe()}
                                </select>
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputTitreSprint">Titre sprint</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" placeholder="Veullez saisir un titre de sprint" value={this.state.sprintTitle} onChange={this.onChangeTitreSprint} />
                            </div>
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputDateDebutSprint">Date de début</label>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="date" className="form-control" id="inputDateDebutSprint" value={this.state.sprintStartDate} onChange={this.onChangeDateDebutSprint} />
                            </div>
                            
                        </div>
                        <div class="form-row">
                            <div className="form-group col-md-3">
                                <label for="inputDateFinSprint">Date de fin</label>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="date" className="form-control" id="inputDateFinSprint" value={this.state.sprintEndDate} onChange={this.onChangeDateFinSprint}  />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputstatusSprint">Status</label>
                            </div>
                            <div className="form-group col-md-8">
                                <select className="form-control" id="selectClient" onChange={this.onChangeStatusSprint} value={this.state.sprintStatus} >
                                    <option value="Attente">Attente</option>
                                    <option value="EnCours">En cours</option>
                                    <option value="Termine">Terminé</option>
                                </select>
                            </div>
                        </div>                     
                    </div>
                    <button type="submit" class="btn btn-success">Enregistrer</button>
                    <button type="submit" class="btn btn-danger">Annuler</button>
                </form>
            </div>
        )
    }
}

export default SprintForm
