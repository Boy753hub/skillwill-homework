import React,{useRef} from 'react'
import styles from '../styles/App.module.css'
import { Form, Input , Button, FormList} from '../styles/styled';

const UserForm = ({onFormSubmit,name, lastname, desc}) => {
    const nameRef = useRef()
    const lastnameRef = useRef()
    const descRef = useRef();

    const onSubmit = (e) => {
      e.preventDefault();
      if (nameRef.current.value && lastnameRef.current.value && descRef.current.value) {
        onFormSubmit(nameRef.current.value , lastnameRef.current.value, descRef.current.value);
      } else {
        console.log('Please fill in all the information');
      }
    };
  
    return (
      <div className={styles.createpage}>
        <FormList>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder="name"
              ref={nameRef}
              defaultValue={name}
            />
            <Input
              type="text"
              placeholder="lastname"
              ref={lastnameRef}
              defaultValue={lastname}
            />
            <Input
              type="text"
              placeholder="task"
              ref={descRef}
              defaultValue={desc}
            />
            <Button type="submit">Add</Button>
          </Form>
        </FormList>
      </div>
    );
  };
  
export default UserForm