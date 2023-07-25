import { createAsyncThunk } from "@reduxjs/toolkit";

const url = '/api/v1/todo'

export const getTodo = createAsyncThunk(
    '/todo/GET',
    async (payload, thunkAPI)=>{
        try {
           const  res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${process.env.REACT_APP_API_KEY}`
            }
           })
           const data = await res.json()
           if(data) return thunkAPI.fulfillWithValue(data.items)
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

export const sendTodo = createAsyncThunk(
    'todo/POST',
    async (payload, thunkAPI) => {
      try {
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          body: JSON.stringify(payload),
          method: 'POST', 
        });
        
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }
  
        const data = await res.json();
        return data; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
      }
    }
  );

  export const updateTodo = createAsyncThunk(
    'todo/PUT',
    async (payload, thunkAPI) => {
      try {
        const res = await fetch(`${url}/${payload.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          body: JSON.stringify(payload.value),
          method: 'PUT',
        });
  
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }
  
        const data = await res.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const deleteTodo = createAsyncThunk(
    'todo/DELETE',
    async (payload, thunkAPI) => {
      try {
        const res = await fetch(`${url}/${payload}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          body: JSON.stringify(payload),
          method: 'DELETE',
        });
  
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message);
        }
  
        const data = await res.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );