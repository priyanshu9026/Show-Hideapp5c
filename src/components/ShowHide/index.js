// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onClickFirstButton = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastButton = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="my-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="show-container">
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstButton}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLastButton}
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
