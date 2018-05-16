import React, { Component } from 'react'
import { Type } from '@novacms/type-check'

export default class Error extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  }
  static defaultProps = {
    children: null,
  }
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessages: [],
      error: [],
    }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error: [error, info] })
    console.log(`${this.state.error}`)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const { errorMessages } = this.state
      const errorString = errorMessages.map((message) => {
        if (Type.isObject(message)) return JSON.stringify(message)
        return message
      })

      return (
        <React.Fragment>
          <h1>`Oops something went wrong, here is the details`</h1>
          <ul>
            {errorString.map(str => (
              <li key={str}>{str}</li>
              ))}
          </ul>
        </React.Fragment>
      )
    }
    return this.props.children
  }
}
