import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timerInSeconds: 0,
  }

  convertTimeToString = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    const seconds = Math.floor(timerInSeconds % 60)
    const stringMins = minutes > 9 ? minutes : `0${minutes}`
    const stringSecs = seconds > 9 ? seconds : `0${seconds}`
    return `${stringMins}:${stringSecs}`
  }

  clearTimerInterval = () => {
    clearInterval(this.interval)
  }

  onClickStart = () => {
    this.interval = setInterval(this.startTimer, 1000)
  }

  onClickStop = () => {
    this.clearTimerInterval()
  }

  onClickReset = () => {
    this.clearTimerInterval()
    this.setState({timerInSeconds: 0})
  }

  startTimer = () => {
    this.setState(prevState => ({timerInSeconds: prevState.timerInSeconds + 1}))
  }

  render() {
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="sub-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="icon"
              />
              <p className="sub-heading">Timer</p>
            </div>
            <h1 className="timer-text">{this.convertTimeToString()}</h1>
            <div className="button-container">
              <button
                type="button"
                className="button start"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
