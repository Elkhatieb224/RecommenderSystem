import React, { Component, Fragment } from 'react';
import quizdata from './Data';
import Answer from './Answer';
import { Link } from 'react-router-dom';

class Questions extends Component {
  state = {
    showResults: false,
    recommend: '',
    completed: 0,
    dataQuestion: [],
    engineering: 0,
    arts: 0,
    commerce: 0,
  };

  setStatefunstion = () => {
    //  use reactjs setState
    this.setState({
      dataQuestion: quizdata,
    });
  };
  componentDidMount() {
    this.setStatefunstion();
  }

  onAnswer = (faculties) => {
    faculties.map((faculty) => {
      if (faculty === 'ENGINEERING')
        this.setState({ engineering: this.state.engineering + 1 });
      if (faculty === 'ARTS') this.setState({ arts: this.state.arts + 1 });
      if (faculty === 'COMMERCE')
        this.setState({ commerce: this.state.commerce + 1 });
    });

    this.setState({ completed: this.state.completed + 1 });
  };

  showResults = () => {
    let recommend = '';

    if (
      this.state.engineering >= this.state.arts &&
      this.state.engineering >= this.state.commerce
    ) {
      recommend = 'faculty of engineering';
    }
    if (
      this.state.commerce >= this.state.arts &&
      this.state.commerce >= this.state.engineering
    ) {
      recommend =
        recommend === ''
          ? 'faculty of commerce'
          : recommend + ' or faculty of commerce';
    }
    if (
      this.state.arts >= this.state.commerce &&
      this.state.arts >= this.state.engineering
    ) {
      recommend =
        recommend === ''
          ? 'faculty of arts'
          : recommend + ' or faculty of arts';
    }

    this.setState({
      showResults: true,
      recommend,
    });
  };

  render() {
    return (
      <Fragment>
        {!this.state.showResults ? (
          <>
            {this.state.dataQuestion.map((data) => {
              return (
                <div key={data.id} className=' mainDiv'>
                  <h2> {data.question}</h2>
                  <Answer
                    key={data.id}
                    answers={data.answers}
                    onAnswer={this.onAnswer}
                  />
                </div>
              );
            })}

            {this.state.completed == 10 && (
              <div>
                <button onClick={this.showResults}>
                  {' '}
                  عرض الكلية المقترحة{' '}
                </button>
              </div>
            )}

            <br />
            <br />

            <div>
              <Link to='/'>
                <button>الرجوع للصفحة الرئيسية</button>
              </Link>
            </div>
          </>
        ) : (
          <div>
            We recommend You to {this.state.recommend}
            <div>
              <Link to='/'>
                <button>الرجوع للصفحة الرئيسية</button>
              </Link>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Questions;
