import React, { Component } from 'react'
import axios from 'axios';

const Sprint = props => (
    <option value={props.sprint._id}>{props.sprint.sprintTitle}</option>
)

class TacheForm extends Component {
    constructor(props)
    {
        super(props)

        this.onChangeSprint = this.onChangeSprint.bind(this)
        this.onChangeTitreTache = this.onChangeTitreTache.bind(this)
        this.onChangeDescriptionTache = this.onChangeDescriptionTache.bind(this)
        this.onChangeStatusTache = this.onChangeStatusTache.bind(this)
        this.onChangeTimeTache = this.onChangeTimeTache.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            sprints: [],
            SprintID:'',
            taskName:'',
            taskDescription:'',
            taskStatus:'',
            taskTime:''
        };
    }

    onChangeSprint(e) {
        this.setState({
            SprintID: e.target.value
        }) 
    }
    onChangeTitreTache(e) {
        this.setState({
            taskName: e.target.value
        })
    }
    onChangeDescriptionTache(e) {
        this.setState({
            taskDescription: e.target.value
        })
    }
    onChangeStatusTache(e) {
        this.setState({
            taskStatus: e.target.value
        })
    }
    onChangeTimeTache(e) {
        this.setState({
            taskTime: e.target.value
        })
    }
    onSubmit(e) {
      //  e.preventdefault();

        const Tasks = {
            SprintID: this.state.SprintID,
            taskName: this.state.taskName,
            taskDescription: this.state.taskDescription,
            taskStatus: this.state.taskStatus,
            taskTime: this.state.taskTime
        }
        console.log(Tasks);

        axios.post('http://localhost:3001/api/v1/tasks', Tasks).then(res => console.log(res.data));

        this.setState=({
            SprintID:'',
            taskName:'',
            taskDescription:'',
            taskStatus:'',
            taskTime:''
        })

       // this.refreshPage();
    }

    refreshPage(){ 
        window.location.reload(); 
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/sprint')
        .then(response => {
            this.setState({
                sprints: response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    sprintListe() {
        return this.state.sprints.map(currentsprint => {
            return <Sprint sprint={currentsprint} key={currentsprint._id} />
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="form-row">
                    <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="SelectProjet">Sprint</label>
                            </div>
                            <div className="form-group col-md-9">
                                <select className="form-control" id="SelectProjet" onChange={this.onChangeSprint}>
                                    {this.sprintListe()}
                                </select>
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Titre de la tache</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez renseigner un titre..." value={this.state.taskName} onChange={this.onChangeTitreTache} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Temps de réalisation (heure)</label>
                            </div>
                            <div className="form-group col-md-9">
                                <input type="text" className="form-control" id="inputDenomination4" placeholder="Veullez selectionner un temps..." value={this.state.taskTime} onChange={this.onChangeTimeTache} />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="form-group col-md-3">
                                <label for="inputEmail4">Status</label>
                            </div>
                            <div className="form-group col-md-8" style={{marginLeft: "8%"}}>
                            <select className="form-control" id="selectClient" onChange={this.onChangeStatusTache} value={this.state.taskStatus} >
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

export default TacheForm
