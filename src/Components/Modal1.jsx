import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import {CircularProgress} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Modal1(props) {

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img
         src="https://cdn.pixabay.com/animation/2022/07/29/10/28/10-28-56-392_512.gif"
        alt=""/>
          <div class="text-2xl font-bold text-center">
            Félicitation Vous avez gagné 50 xaf!!!
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Remplissez le formulaire si dessous pour encaisser vos fonds
          </Typography>

           <div className='my-4'>
          <FormControl fullWidth>
        <InputLabel >Moyen de retrait</InputLabel>
        <Select
          value={props.paymentMethods}
          label="Moyen de retrait"
          onChange={props.handleChange}
        >
          <MenuItem value={"Orange"}>Orange Money</MenuItem>
          <MenuItem value={"MTN"}>Mobile Money</MenuItem>
          
        </Select>
      </FormControl>
      </div>


          <div className="my-4">
          {props.paymentMethods === "MTN" &&
         <TextField fullWidth 
         onChange={props.onChangePhoneNumber}
         type="number"
         label="Numéro Mobile Money"
         value={props.phone}/>
        }
        
          {props.paymentMethods === "Orange" &&
          <TextField type="number"
          onChange={props.onChangePhoneNumber}
           fullWidth label="Numéro Orange Money" 
           value={props.phone}/>
        }
        
          </div>
          {props.paymentMethods &&
            <div className="my-4">
            <Button fullWidth size="large" variant="contained"
            onClick={props.pay}>
               {props.loader && <ThemeProvider theme={theme}>
                <CircularProgress indeterminate
           color="primary" thickness={9}/>
           </ThemeProvider> }
           {props.loader===false &&
             <p className='text-xl font-extrabold'>Encaisser</p>}</Button>
              </div>
          }
        
        </Box>
      </Modal>
    </div>
  );
}