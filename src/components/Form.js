import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    text: '',
    isDone: false
  }
  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    const {addItem} = this.props
    addItem(this.state)
    this.setState(this.initialState)
  }
  
  render() {
    const {text} = this.state
    return (
      <form>
        <label htmlFor="text">New item</label>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={this.handleChange} />
        <input
          type="button"
          value="Add"
          onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;
