import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstnameValid: false,
    isLastnameValid: false,
    isValidResponse: false,
  }

  onClickSubmitBtn = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({
        isFirstnameValid: true,
        isLastnameValid: true,
        isValidResponse: false,
      })
      return
    } else if (firstName === '') {
      this.setState({isFirstnameValid: true, isValidResponse: false})
      return
    } else if (lastName === '') {
      this.setState({isLastnameValid: true, isValidResponse: false})
    } else {
      //both firstname and lastname are valid
      this.setState({isValidResponse: true})
    }
  }

  isFirstnameValid = event => {
    const {value} = event.target
    if (value === '') {
      this.setState({isFirstnameValid: true})
    } else {
      this.setState({isFirstnameValid: false})
    }
  }

  isLastnameValid = event => {
    const {value} = event.target
    if (value === '') {
      this.setState({isLastnameValid: true})
    } else {
      this.setState({isLastnameValid: false})
    }
  }

  onChangeFirstname = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstName() {
    const {isFirstnameValid} = this.state
    console.log(isFirstnameValid)
    return (
      <div>
        <label htmlFor="first-name" className="label-first-name">
          FIRST NAME
        </label>
        <br />
        <input
          type="text"
          id="first-name"
          className={`input-first-name ${isFirstnameValid ? 'bg-error' : ''}`}
          placeholder="First name"
          onChange={this.onChangeFirstname}
          onBlur={this.isFirstnameValid}
        />
        <p className="required">{isFirstnameValid ? 'Required' : ''}</p>
      </div>
    )
  }

  onClickSubmitAnotherResponse = ()=>{
    this.setState({isValidResponse:false})
  }

  renderLastName() {
    const {isLastnameValid} = this.state
    return (
      <div>
        <label htmlFor="last-name" className="label-first-name">
          LAST NAME
        </label>
        <br />
        <input
          type="text"
          id="last-name"
          className={`input-first-name ${isLastnameValid ? 'bg-error' : ''}`}
          placeholder="Last name"
          onChange={this.onChangeLastname}
          onBlur={this.isLastnameValid}
        />
        <p className="required">{isLastnameValid ? 'Required' : ''}</p>
      </div>
    )
  }

  renderRegistrationForm = () => {
    return (
      <>
        <form onSubmit={this.onClickSubmitBtn} className="form-container">
          {this.renderFirstName()}
          {this.renderLastName()}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </>
    )
  }

  renderSuccessfullRegistration = () => {
    return (
      <div className="registred-successfull-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-img"
        />
        <p className="successfully-submitted">Submitted Successfully</p>
        <button className="submit-btn" onClick={this.onClickSubmitAnotherResponse}>Submit another response</button>
      </div>
    )
  }
  render() {
    const {isValidResponse} = this.state
    return (
      <div className="bg-container">
        <h1 className="registration-name">Registration</h1>
        {isValidResponse
          ? this.renderSuccessfullRegistration()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
