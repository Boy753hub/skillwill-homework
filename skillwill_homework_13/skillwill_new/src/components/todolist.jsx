import React, { Component } from 'react';
import Todo from './todo';
import Tododone from './tododone';

class Todolist extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      startingvalue: '',
      list: [
        { id: 1, desc: 'get a haircut' },
        { id: 2, desc: 'shower' },
      ],
      doneList: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.startingvalue !== nextState.startingvalue) {
      return true;
    }
    if (this.state.list.length !== nextState.list.length) {
      return true;
    }
    for (let i = 0; i < this.state.list.length; i++) {
      if (
        this.state.list[i].id !== nextState.list[i].id ||
        this.state.list[i].desc !== nextState.list[i].desc
      ) {
        return true;
      }
    }
    for (let i = 0; i < this.state.doneList.length; i++) {
      if (
        this.state.doneList[i].id !== nextState.doneList[i].id ||
        this.state.doneList[i].desc !== nextState.doneList[i].desc
      ) {
        return true;
      }
    }
    return false;
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      startingvalue: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { list, doneList, startingvalue } = this.state;

    const job = {
      id: list.length + doneList.length + 1,
      desc: startingvalue,
    };

    this.setState({
      list: [...list, job],
      startingvalue: '',
    });
  };

  moveToDone = (id) => {
    const { list, doneList } = this.state;
    const doneJob = list.find((obj) => obj.id === id);

    this.setState({
      doneList: [...doneList, doneJob],
      list: list.filter((data) => data.id !== id),
    });
  };

  deleteFromDone = (id) => {
    const { doneList } = this.state;

    this.setState({
      doneList: doneList.filter((data) => data.id !== id),
    });
  };

  moveTodoToDone = (id) => {
    const { doneList } = this.state;
    const todoJob = doneList.find((obj) => obj.id === id);

    this.setState({
      list: [...this.state.list, todoJob],
    });
    this.deleteFromDone(todoJob.id);
  };

  render() {
    const { startingvalue, list, doneList } = this.state;

    return (
      <div className="ppa">
        <div className="formlist">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={startingvalue}
            />
            <button type="submit">Add a job</button>
          </form>
          {list.map((job) => (
            <Todo
              key={job.id}
              id={job.id}
              desc={job.desc}
              action={this.moveToDone}
            />
          ))}
        </div>
        <div className="formlist">
          {doneList.map((job) => (
            <Tododone
              key={job.id}
              id={job.id}
              desc={job.desc}
              action={this.deleteFromDone}
              action2={this.moveTodoToDone}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Todolist;
