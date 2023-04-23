import React, { Component } from 'react';
import { calculateResult, detectSums } from './utils';
import Calculator from './components/Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userInput: '',
      result: '',
      error: 'Write something',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    const { input, result, error } = calculateResult(value);
    this.setState({ userInput: input, result, error });
    event.preventDefault();

    detectSums([1, 2, 1, 2, 3]);
  }

  render() {
    const { userInput, result, error } = this.state;
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
