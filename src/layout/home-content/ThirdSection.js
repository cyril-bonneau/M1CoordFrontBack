import React, { Component } from 'react'
import backGround from '../../assets/img/back_third_section.png'
import '../../assets/sass/home/style.scss'
//import {Bar} from 'react-chartjs-2';

class ThirdSection extends Component {

    /**data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      }*/
    render() {
        return (
            <div>
                {/*<Bar data={this.data} />*/}
                <img className="third-section" src={backGround} />
            </div>
        )
    }
}

export default ThirdSection
