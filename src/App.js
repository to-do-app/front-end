import React, { Component } from 'react';
import List from './components/List'
import Form from './components/Form'
import { Button } from '@material-ui/core';

class App extends Component {
  state = {
    list: []
  }

  addItem = (item) => {
    const newList = [...this.state.list, item]
    this.setState({list: newList})
  }

  doItem = (indexToDo) => {
    const newList = [...this.state.list]
    newList[indexToDo].isDone = !newList[indexToDo].isDone
    this.setState({list: newList})
  }

  deleteItem = (indexToDelete) => {
    const newList = this.state.list.filter((item, index) => index !== indexToDelete)
    this.setState({list: newList})
  }

  render() {
    return (
      <div className="App">
        <List
          list={this.state.list}
          doItem={this.doItem}
          deleteItem={this.deleteItem} />
        <Form 
          addItem={this.addItem} />
        <Button color="primary">Hello World</Button>
      </div>
    )
  }
}

export default App;
