import React, { Component } from 'react'

class QuizEnd extends Component {
  handleRestClick() {
    this.props.restClickHandler()
  }
  render() {
    return(
      <div>
        <p>Thanks for playing!</p>
        <a href='' onClick={this.handleRestClick.bind(this)}>Reset Quiz</a>
      </div>
    )
  }
}

export default QuizEnd
