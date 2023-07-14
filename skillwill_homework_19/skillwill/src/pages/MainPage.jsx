
import React from 'react';
import Todo from '../components/todo';
import { FormList , PPA,} from '../styles/styled';
import useLocalStorage from '../Hooks/useLocalStorage';
import useWindowSize from '../Hooks/useWindowSize';
import { DarkParagraph,} from '../styles/styled';
import styles from "../styles/App.module.css"
import useFetch from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'

const MainPage = () => {
    const [isOpen = true, toggle] = useLocalStorage('tab', true);
    const {width} = useWindowSize()
    const {response, error , loading, resendRequest} = useFetch({url: '/api/v1/todo', method: 'GET'})

    
    const list = response?.items.map(user => {
      return {
        name: user.name,
        lastname: user.lastname,
        id: user._uuid,
        desc: user.desc,
        isCompleted: user.isCompleted,
        date: user._created
      }
    }) || []
  
    if(loading) return <div className={styles.spinner}>
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
   
    if(error) return <p>`${error.message}`</p>
  

    return (
      <PPA color={width > 600 && isOpen ? '#121212' : ''} height={list.length >= 8  ? 'auto' : ''}>
  
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
        <div>
            <Link className={styles.links} to={'/Create'}>Creat</Link>
        </div>
          <br />
          
          {list.map((job) => (
            <Todo 
            key={job.id} 
            id={job.id} 
            desc={job.desc}
            names ={job.name}
            lastname={job.lastname} 
            date={job.date}
            isCompleted={job.isCompleted}
            resendRequest={resendRequest}
             />
            ))}
        
            </FormList>
         
       
      </PPA>
    );
}

export default MainPage