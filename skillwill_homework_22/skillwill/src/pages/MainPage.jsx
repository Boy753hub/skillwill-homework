
import React, { useEffect } from 'react';
import Todo from '../components/todo';
import { FormList , PPA,} from '../styles/styled';
import useWindowSize from '../Hooks/useWindowSize';
import styles from "../styles/App.module.css"
import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import { useHeaderContext } from '../contexts/headerContexts';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../store/todoApi/todoApi.thunks';

const MainPage = () => {
    const {width} = useWindowSize()

    // const {list, loading, resendRequest, error} = useTodoContext()
    
    const {isOpen, changeLan } = useHeaderContext()

    const dispatch = useDispatch()
    const {data} = useSelector((state)=> state.todo)

    const {todo, loading, error} = useSelector(state => state.todoApi)

    
    useEffect(()=>{
      dispatch(getTodo())
    }, [])
    
    if(loading) return <PPA color={isOpen ? '#121212' : ''}>

    <div className={styles.spinner}>
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    </div> 
    </PPA>
   
    if(error) return <p>`${error.message}`</p>
  

    return (
      <PPA color={width > 600 && isOpen ? '#121212' : ''} height={todo.length >= 7  ? 'auto' : ''}>
          <FormList> 
          <h2>{data[changeLan].title}</h2>
          <br />
        <div>
            <Link className={styles.links} to={'/Create'}>{data[changeLan].create}</Link>
        </div>
          <br />
          
          {/* {todo.map((job) => (
            <Todo 
            key={job.id} 
            id={job.id} 
            desc={job.desc}
            names ={job.name}
            lastname={job.lastname} 
            date={job.date}
            isCompleted={job.isCompleted}
             />
            ))} */}
            {todo.map((job) => (
              !job.isCompleted ?
            <Todo 
            key={job._uuid} 
            id={job._uuid} 
            desc={job.desc}
            names ={job.name}
            lastname={job.lastname} 
            date={job._created}
            isCompleted={job.isCompleted}
             />: ''
            ))}
            <h2>{data[changeLan].done}</h2>
            {todo.map((job) => (
              job.isCompleted ? 
            <Todo 
            key={job._uuid} 
            id={job._uuid} 
            desc={job.desc}
            names ={job.name}
            lastname={job.lastname} 
            date={job._created}
            isCompleted={job.isCompleted}
             />: ''
            ))}
           
            </FormList>
         
       
      </PPA>
    );
}

export default MainPage