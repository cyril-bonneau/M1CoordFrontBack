import React, { Component } from 'react'
import FormAddClient from './formAddClient'
import FormAddProjet from './formAddProjet'
import FormAddSprint from './formAddSprint'
import formAddTask from './formAddTask'
import listClient from './listClient'
import listProjet from './listProjet'
import listSprint from './listSprint'
import listTask from './listTask'

class BodyDashBoard extends Component {
    render(props) {
        return (
            <div>
                
                <FormAddClient />
            </div>
        )

    }
}

export default BodyDashBoard