const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {poem: ""};
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    if (this.validPoem()) {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        </div>
      )
    } else {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      )
    }
  }

  handleChange(event){
    this.setState( {poem: event.target.value} )
  }

  validPoem(){
    let poemArray = this.state.poem.split('\n')
    if (poemArray.length === 3) {
      let firstLineValid = (poemArray[0].trim().split(' ').length === 5)
      let secondLineValid = (poemArray[1].trim().split(' ').length === 3)
      let thirdLineValid = (poemArray[2].trim().split(' ').length === 5)
      return ( firstLineValid && secondLineValid && thirdLineValid ) ? true : false
    } else {
      return false
    }

  }

}

module.exports = PoemWriter;
