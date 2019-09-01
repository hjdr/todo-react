import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Get hair cut',
        completed: false
      },
      {
        id: 3,
        title: 'Arrange dinner party',
        completed: false
      }
    ]
  }

  render() {

    return (
      <div className="App">
       <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
