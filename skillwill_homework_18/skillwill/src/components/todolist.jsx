import React, { useCallback, useEffect, useState } from 'react';
import Todo from './todo';
import Tododone from './tododone';
import Todofinish from './todofinish'
import { FormList , PPA, Form, Input , Button} from '../styles/styled';
import useLocalStorage from '../Hooks/useLocalStorage';
import useWindowSize from '../Hooks/useWindowSize';
import { DarkParagraph, Header,HeaderDone} from '../styles/styled';
import styles from "../styles/App.module.css"


const Todolist = () => {
  const [isOpen = true, toggle] = useLocalStorage('tab', true);
  const {width} = useWindowSize()
  
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState([]);
  const [doneList, setDoneList] = useState([])
  const [finishList, setFinishList] = useState([])
  
  const api_key = 'Jq5fQi5cGcyL_3OZuTaFXkfPWqziBdmqN872qvFnvwsYawoFUQ'
  
  // aq ukve chem gaketebul todolisti shevcvale ro serverze sheenaxa es data da mere wamoego danarchens gavaketeb 19 davalebashi
  
  useEffect(()=>{
        fetch("/api/v1/todo", {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api_key}`
          }
        })
        .then(res => 
          {
            if(!res.ok) throw new Error("Response failed")
            return res.json()
          }
        ).then(data => setList(data.items.map(user => {
          return {
            id: user._uuid,
            desc: user.desc,
            isCompleted: user.isCompleted,
          }
        })))
        .catch(error => console.log(error))
      
  },[])
  
  const handleChange = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/v1/todo', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api_key}`
      },
      body: JSON.stringify([{desc: inputValue ,  isCompleted: false}])
    })
    .then(res => 
      {
        if(!res.ok) throw new Error("Response failed")
        return res.json()
      }
      ).then(data => setList((prev)=> [{
        id: data.items[0]._uuid,
        desc: data.items[0].desc,
        isCompleted: data.items[0].isCompleted,
      }, ...prev]))
      .catch(error => console.log(error))

    setInputValue('')
  }
////////////////////////////


  const moveToProgress = useCallback((id) => {
      const doneJob = list.find((obj) => obj.id === id)
      setDoneList((prevDoneList) => [...prevDoneList, doneJob])
      setList((prevList) => prevList.filter((data) => data.id !== id))
    },
    [list]
  )

  const deleteFromProgress = useCallback((id) => {
    setDoneList((prevDoneList) => prevDoneList.filter((data) => data.id !== id));
    },[])
 
    
    const deleteFromDone = useCallback((id) => {
      setFinishList((prevDoneList) => prevDoneList.filter((data) => data.id !== id));
    },[])


  const movetoFinish = (id)=>{
      const todoJob = doneList.find((obj) => obj.id === id)
      setFinishList((prevList) => [...prevList, todoJob])
      deleteFromProgress(todoJob.id)
  }

  const moveTodoToDone = (id) => {
      const todoJob = doneList.find((obj) => obj.id === id)
      setList((prevList) => [...prevList, todoJob])
      deleteFromProgress(todoJob.id)
    }
    
  return (
    <PPA color={width > 600 && isOpen ? '#121212' : ''}>
       { width > 600 && <div>
        <DarkParagraph>dark theme</DarkParagraph>
      <label className={`${styles.switch}`}>
        <input onChange={() => toggle((prev)=>!prev)} value={isOpen} type="checkbox" checked={isOpen} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      </div>}
        <FormList> 
        <h2>to do : {`${list.length}`}</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <Input type="text" onChange={handleChange} value={inputValue} />
          <Button type="submit">Add</Button>
        </Form>
        <br />
        {list.map((job) => (
          <Todo key={job.id} id={job.id} desc={job.desc} action={moveToProgress} />
          ))}
      
          </FormList>
      <FormList>
        <Header>
         <h2>in progress  : {`${doneList.length}`}</h2>
        <br />
        </Header>
        {doneList.map((job) => (
          <Tododone
            key={job.id}
            id={job.id}
            desc={job.desc}
            action={movetoFinish}
            action2={moveTodoToDone}
          />
        ))}
      </FormList>
       
      <FormList>
        <HeaderDone>
        <h2>done  : {`${finishList.length}`}</h2>
        <br />
        </HeaderDone>
        {finishList.map((job) => (
          <Todofinish
            key={job.id}
            id={job.id}
            desc={job.desc}
            action={deleteFromDone}
          />
        ))}
      </FormList>
    </PPA>
  );
};

export default Todolist;
