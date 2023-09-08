import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  getRandomIncrementValue = () => Math.floor(Math.random() * 101)

  handleIncrement = () => {
    const incrementValue = this.getRandomIncrementValue()
    this.setState(prevState => ({
      count: prevState.count + incrementValue,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="even-odd-app">
        <h1>Count {count}</h1>
        <p>Increase By Random Number Between 0 to 100</p>
        <button
          className="increment-button"
          type="button"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    )
  }
}

export default EvenOddApp
