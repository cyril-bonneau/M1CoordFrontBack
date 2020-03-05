import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'

class FirstSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            labels: ['Client','Projet','Sprint','Tâche'],
            datasets: [{
                data: [2000, 4000, 2850, 100],
                backgroundColor: ['red','blue','green']
            }]
        }
    }

    render() {
        return (
            <div>
                <div className="tableau-bord" style={{width: "100%",height: "auto",border: "solid 1px",padding: "1%"}}>
                    <span style={{fontSize: "180%"}}>Tableau de bord</span>
                    <Doughnut data={{
                        labels: this.state.labels,
                        datasets: this.state.datasets
                    }}
                        height= '50%'
                    />
                </div>
            </div>
        )
    }
}

export default FirstSection
