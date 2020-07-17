import React, { Component, Fragment } from 'react';

export class Answer extends Component {
  //  create state
  state = {
    answers: this.props.answers,
    answer: '',
    Clickcheck: true,
  };

  // Event on button
  onAnswer = (answer) => {
    this.props.onAnswer(answer.faculties);
    this.setState({
      answer: answer.option,
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.answer === '' ? (
          this.state.answers.map((ans, i) => {
            return (
              <button key={i} onClick={() => this.onAnswer(ans)}>
                {' '}
                {ans.option}
              </button>
            );
          })
        ) : (
          <button> {this.state.answer}</button>
        )}
      </Fragment>
    );
  }
}

export default Answer;
