import React from 'react';
import { Button ,Todos} from '../styles/styled'
import { Link } from 'react-router-dom';
import styles from "../styles/App.module.css"
import useRequest from '../Hooks/useRequest';
import { useHeaderContext } from '../contexts/headerContexts';
import { useDispatch } from 'react-redux';
import { deleteTodoActions, doneTodoActions } from '../store/todo/todo.actions';

const Todo = ({ id, desc , names , lastname , isCompleted}) => {

  const dispatch = useDispatch()
  const {sendRequest} = useRequest({url: `/api/v1/todo/${id}`, method: 'PUT'})
  const {sendRequest: request2} = useRequest({url: `/api/v1/todo/${id}`, method: 'DELETE'})
 
  const {changeLan , data} = useHeaderContext()
  
  // const serverUTCTimestamp = date;
  // const utcDate = new Date(serverUTCTimestamp * 1000);
  // const options = {
  //   timeZone: 'Asia/Tbilisi',
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   second: '2-digit',
  // };
  // const localDateString = new Intl.DateTimeFormat('en-US', options).format(utcDate);
  
  const finish = () =>{
    // sendRequest({isCompleted: true})
    // .then(()=> resendRequest())
    // .catch(err => console.log(err))
    console.log(id)
    dispatch(doneTodoActions(id))
  }
  
  const onDelete = ()=>{
    // request2()
    // .then(()=> resendRequest())

    dispatch(deleteTodoActions(id))
  }

  return (
    <Todos color={ !isCompleted ? '#dc5038' : 'green'}>
      <div>
      <p className={styles.p}><b>{names} {lastname}</b></p>
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
