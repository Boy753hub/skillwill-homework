import React from 'react'
import UserForm from '../components/userForm';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/App.module.css'
import { ColorRing } from 'react-loader-spinner';
import { useHeaderContext } from '../contexts/headerContexts';
import { PPA } from '../styles/styled';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, sendTodo } from '../store/todoApi/todoApi.thunks';

const CreatePage = () => {

    const dispatch = useDispatch()
    // const {sendRequest} = useRequest({url: '/api/v1/todo', method: 'POST'})
    const navigate = useNavigate()
    const {loading} = useSelector(state => state.todoApi)
    
   
    

      
    const handleSubmit = ( name, lastname, desc) => {
        dispatch(sendTodo([{name: name ,lastname: lastname, desc: desc, isCompleted: false,}]))
        .then(()=>{
            dispatch(getTodo())
          })
        navigate('/')
        
        // dispatch(addtodo({name: name ,lastname: lastname, desc: desc, isCompleted: false, id: Math.random()}))
        // sendRequest([{name: name ,lastname: lastname, desc: desc, isCompleted: false}])
        // .then(()=> navigate('/'))
        // .catch(err => console.log(err))

    
      }
      
      const {isOpen} = useHeaderContext()
    
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

  return <UserForm onFormSubmit={handleSubmit}/>
  
}

export default CreatePage