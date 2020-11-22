import React, { Component } from 'react';
import { Button , TextField } from '@material-ui/core';

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
      <form noValidate autoComplete="off">
        <TextField
          name="text"
          value={text}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.submitForm}>
          Add
        </Button>
      </form>
    )
  }
}

export default Form;
