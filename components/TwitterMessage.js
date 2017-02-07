const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Max Chars: {this.props.maxChars}</p>
        <p>You have {this.props.maxChars - this.state.value.length} characters remaining</p>
      </div>
    )
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

module.exports = TwitterMessage;
