import React,{FormEvent, useRef} from 'react'
import styles from '../styles/App.module.css'
import { Form, Input , Button, FormList, PPA} from '../styles/styled';
import { useHeaderContext } from '../contexts/headerContexts';
import { iuserForm } from '../interface/userForm.interface';

const UserForm:React.FC<iuserForm> = ({onFormSubmit,name, lastname, desc}) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const lastnameRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLInputElement>(null);

    
    const {isOpen, data, changeLan} = useHeaderContext()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (nameRef.current?.value && lastnameRef.current?.value && descRef.current?.value) {
        onFormSubmit(nameRef.current.value , lastnameRef.current.value, descRef.current.value);
      } else {
        console.log('Please fill in all the information');
      }
    };
  
    return (
      <PPA color={isOpen ? '#121212' : ''}>
       <div className={styles.createpage}>
        <FormList>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              placeholder={data[changeLan].name}
              ref={nameRef}
              defaultValue={name}
            />
            <Input
              type="text"
              placeholder={data[changeLan].lastname}
              ref={lastnameRef}
              defaultValue={lastname}
            />
            <Input
              type="text"
              placeholder={data[changeLan].task}
              ref={descRef}
              defaultValue={desc}
            />
            <Button type="submit">{data[changeLan].Add}</Button>
          </Form>
        </FormList>
        </div>
      </PPA>
    );
  };
  
export default UserForm