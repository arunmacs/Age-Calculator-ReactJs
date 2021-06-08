import {Component} from 'react'
import './index.css'

class AgeCalculator extends Component {
  state = {birthYearInput: '', isErrorInput: false, isResultOut: false, age: 0}

  getBirthYearInput = event => {
    const {value} = event.target
    this.setState({birthYearInput: value})
    this.setIsErrorInput(false)
    this.setIsResultOut(false)
  }

  setAgeResult = result => {
    this.setState({age: result})
  }

  setIsErrorInput = value => {
    this.setState({isErrorInput: value})
  }

  setIsResultOut = value => {
    this.setState({isResultOut: value})
  }

  calculateAge = birthYear => {
    const yearOfBirth = new Date(birthYear).getFullYear()
    const presentYear = new Date().getFullYear()
    const result = presentYear - yearOfBirth
    this.setIsErrorInput(false)
    this.setIsResultOut(true)
    this.setAgeResult(result)
  }

  validateInput = () => {
    const {birthYearInput} = this.state
    if (
      birthYearInput.length <= 4 &&
      Number.isInteger(parseInt(birthYearInput, 10))
    ) {
      this.calculateAge(birthYearInput)
    } else {
      this.setIsErrorInput(true)
      this.setIsResultOut(false)
    }
  }

  getResultMsg = result => {
    if (result > 1) {
      return (
        <p className="correct-result-age">
          You are {result} years old by the end of 2021
        </p>
      )
    }
    return (
      <p className="correct-result-age">
        You are {result} year old by the end of 2021
      </p>
    )
  }

  renderResultMsg = () => {
    const {isResultOut, age} = this.state

    if (isResultOut) {
      return this.getResultMsg(age)
    }
    return null
  }

  renderErrorMsg = () => {
    const {isErrorInput} = this.state
    if (isErrorInput) {
      return <p className="error-msg">Enter the year that you are Born</p>
    }
    return null
  }

  render() {
    const {birthYearInput, isErrorInput} = this.state

    return (
      <div className="bg-div">
        <div className="content-div">
          <h1 className="heading">Age Calculator</h1>
          <input
            type="input"
            value={birthYearInput}
            onChange={this.getBirthYearInput}
            placeholder="Enter the year that you are Born"
          />
          {isErrorInput ? this.renderErrorMsg() : this.renderResultMsg()}
          <button onClick={this.validateInput} type="button">
            Calculate
          </button>
        </div>
        <div className="image-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
            alt="human-age-lifecycle"
          />
        </div>
      </div>
    )
  }
}

export default AgeCalculator
