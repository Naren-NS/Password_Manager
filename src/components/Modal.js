import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({

  

  open,
  handleClose
}) {

    const [usernameObject, setUsernameObject] = useState('');
    const [passwordObject, setPasswordObject] = useState('');

    const [message,setMessage] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        setMessage('${usernameObject} ${passwordObject}');
        try{
          const data={
            "domain":usernameObject,
            "password":passwordObject
          }
          const result = await axios.post("http://localhost:3004/users/dp",data);
        }
        catch(e){
          console.log(e);
        }
        setUsernameObject('');
        setPasswordObject('');
    };


  return (
    




    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='center'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add A Password
          </Typography>

          <input
          placeholder='Enter your Username'
          className='input-fields'
          type='text'
          name='name'
          onChange={(event) =>
            setUsernameObject(event.target.value)
          }
          />

          <input
          placeholder='Enter your Password'
          className='input-fields'
          name='password'
          type={'password'}
          onChange={(event) =>
            setPasswordObject(event.target.value)
          }
          />

          <button 
                 onClick={handleSubmit}
          className='btn btn-primary btn-lg'> Add  </button>

        </Box>
      </Modal>
    </div>
  );
}