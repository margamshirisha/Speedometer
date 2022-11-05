// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onClickApplyBrakeButton = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <div className="img-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="speedometer"
            />
          </div>
          <p className="description">Speed is {speed}mph</p>
          <p className="note">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button
              type="button"
              className="btn button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="btn2 button"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
