import { Component, Fragment } from 'react'
import { isObject } from '../../../api/utils'

export class _Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessages: [],
    };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error: [error, info] });
    console.log(`${error} ${info}`)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const { errorMessages } = this.state
      const errorString = errorMessages.map(message => isObject(message) ? JSON.stringify(message) : message)

      return (
        <Fragment>
            <h1>Oops something went wrong, here's the details</h1>
            <ul>
              {errorString.map((str, key)=>(
                <li key={key}>{str}</li>
              ))}
            </ul>
          </Fragment>
      );
    }
    return this.props.children;
  }
}
