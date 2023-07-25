import React from 'react';
import { Button ,Todos} from '../styles/styled'
import styles from "../styles/App.module.css"
import { useHeaderContext } from '../contexts/headerContexts';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, deleteTodo, getTodo } from '../store/todoApi/todoApi.thunks';

const Todo = ({ id, desc , names , lastname , isCompleted, date}) => {

  const dispatch = useDispatch()
  // const {sendRequest} = useRequest({url: `/api/v1/todo/${id}`, method: 'PUT'})
  // const {sendRequest: request2} = useRequest({url: `/api/v1/todo/${id}`, method: 'DELETE'})
 
  const {changeLan } = useHeaderContext()
  const {data} = useSelector((state)=> state.todo)
  
  const serverUTCTimestamp = date;
  const utcDate = new Date(serverUTCTimestamp * 1000);
  const options = {
    timeZone: 'Asia/Tbilisi',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const localDateString = new Intl.DateTimeFormat('en-US', options).format(utcDate);
  
  const finish = () =>{
    dispatch(updateTodo({id , value: {isCompleted: true}}))
    .then(()=>{
      dispatch(getTodo())
    })
    // window.location.reload()
  }
  
  const onDelete = ()=>{
    // request2()
    // .then(()=> dispatch(getTodo()))
    
    dispatch(deleteTodo(id))
    .then(()=>{
      dispatch(getTodo())
    })
    // dispatch(getTodo())
  }

  return (
    <Todos color={ !isCompleted ? '#dc5038' : 'green'}>
      <div>
      <p className={styles.p}><b>{names} {lastname}</b>{localDateString}</p>
        <p className={styles.p}>{desc}</p>
      </div>
      <div>
        {isCompleted && <Button onClick={onDelete}>{data[changeLan].delete}</Button>}
        {!isCompleted && <div><Button onClick={finish}>{data[changeLan].finish}</Button> </div>}
        {/* {isCompleted && <Button onClick={onDelete}>{data[changeLan].delete}</Button>}
        {!isCompleted && <div><Button onClick={finish}>{data[changeLan].finish}</Button> <Button><Link className={styles.links} to={`/Edit/${id}`}>{data[changeLan].edit}</Link></Button> </div>} */}
      </div>
    </Todos>
  );
};

export default React.memo(Todo);
