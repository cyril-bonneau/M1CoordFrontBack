import React, { Component } from 'react'
import BodyDashBoard from '../layout/dashBoard/bodyDashBoard'
import formAddClient from '../layout/dashBoard/formAddClient'
import formAddProjet from '../layout/dashBoard/formAddProjet'
import formAddSprint from '../layout/dashBoard/formAddSprint'
import formAddTask from '../layout/dashBoard/formAddTask'
import listClient from '../layout/dashBoard/listClient'
import listProjet from '../layout/dashBoard/listProjet'
import listSprint from '../layout/dashBoard/listSprint'
import listTask from '../layout/dashBoard/listTask'

class DashBoard extends Component {
    render() {
        return (
            <div>
                
                <BodyDashBoard />
            </div>
            
            
        )
    }
}

export default DashBoard