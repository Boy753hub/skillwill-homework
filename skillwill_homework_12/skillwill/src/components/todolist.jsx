import React, { Component } from 'react'
import Todo from './todo'
import Tododone from './tododone'

class todolist extends Component{

    state ={
        startingvalue: '',
        list:[
            {  id: 1,  desc: 'get a haircut'  },
            {  id: 2,  desc: 'shower'  }
        ],
        doneList:[]
    }

    onchange = (event)=>{
        const value = event.target.value;
        this.setState({
            startingvalue: value,
        });
    }
    onsubmit = (event)=>{
        event.preventDefault();

        const job = {
          id: this.state.list.length + this.state.doneList.length + 1,
          desc: this.state.startingvalue,
        };
    
        this.setState({
          list: [...this.state.list, job],
          startingvalue: "",
        });
        console.log(this.state)
    }
    movetodone=(id)=>{
        let doneJob = this.state.list.find(obj=> obj.id === id)
        this.setState({
            doneList:[...this.state.doneList, doneJob]
        })
        const list = this.state.list.filter((data) => data.id !== id);
        this.setState({
        list,
        });
    }
    deleteFromDone=(id)=>{
        const doneList = this.state.doneList.filter((data) => data.id !== id);
        this.setState({
          doneList,
        });
    }
    movdetoTodo = (id) => {
        let todoJob = this.state.doneList.find(obj => obj.id === id);
        this.setState({
          list: [...this.state.list, todoJob]
        });
        this.deleteFromDone(todoJob.id)
      }
      

    render(){
        return (
            <div className='ppa'>
                <div className='formlist'>
                    <form onSubmit={this.onsubmit} >
                        <input  type="text"onChange={this.onchange} value={this.state.startingvalue} />
                        <button type='submit'>Add a job</button>
                    </form>
                    {this.state.list.map((job) => (
                        <Todo
                        key={job.id}
                        id={job.id}
                        desc={job.desc}
                        action={this.movetodone}
                        />
                        ))}
                </div>
                <div className='formlist'>
                    {this.state.doneList.map((job) => (
                        <Tododone
                        key={job.id}
                        id={job.id}
                        desc={job.desc}
                        action={this.deleteFromDone}
                        action2={this.movdetoTodo}
                        />
                        ))}
                </div>
            </div>
        )
    }
}

export default todolist