import React from 'react';
import { Button ,Todos} from '../styles/styled'
import { Link } from 'react-router-dom';
import styles from "../styles/App.module.css"
import useRequest from '../Hooks/useRequest';

const Todo = ({ id, desc , names , lastname, date , isCompleted, resendRequest}) => {
  const {sendRequest} = useRequest({url: `/api/v1/todo/${id}`, method: 'PUT'})
  const {sendRequest: request2} = useRequest({url: `/api/v1/todo/${id}`, method: 'DELETE'})
  
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
    sendRequest({isCompleted: true})
    .then(()=> resendRequest())
    .catch(err => console.log(err))
  }
  
  const onDelete = ()=>{
    request2()
    .then(()=> resendRequest())
  }

  return (
    <Todos color={ !isCompleted ? '#dc5038' : 'green'}>
      <div>
      <p className={styles.p}><b>{names} {lastname}</b> {localDateString}</p>
        <p className={styles.p}>{desc}</p>
      </div>
      <div>
        {isCompleted && <Button onClick={onDelete}>Delete</Button>}
        {!isCompleted && <div><Button onClick={finish}>Finish</Button> <Button><Link className={styles.links} to={`/Edit/${id}`}>Edit</Link></Button> </div>}
      </div>
    </Todos>
  );
};

export default React.memo(Todo);
