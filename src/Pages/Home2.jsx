import * as React from 'react';
import { useNavigate, useParams } from "react-router-dom";

import {Button, CircularProgress} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import database from '../supabase'

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


export default function Home2(){
    const navigate = useNavigate();
    const [clicked, setClicked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const {id} = useParams();
    const {nerve} = useParams();
    const [ticket, setTicket] = React.useState({})

    const [count, setCount] = React.useState(0)


    async function whenClicked(){
       await updateCount()
        setClicked(true)
      //  setTimeout(() => { navigate(`x7/wheel/${id}`);}, 2000);   
      setTimeout(() => { navigate(`/${id}/x7/wheel`);}, 2000);    
 
    }

    async function updateCount(){
      try{
 await database
  .from('tickets')
  .update({ count: parseInt(count-1) })
  .eq('name', id)
} catch(err){console.log("In updateCount: ", err.message);}
    } 

    const deleteTicket= async()=>{
      await database
      .from('tickets')
      .delete()
      .eq('name', id)
     }


const verifyTicket = async() => {
  //const str2 = ref()
  setLoading(true)
  try{
    const { data, error } = await database
  .from('tickets')
  .select('*')
  .eq('name', id)

  console.log("data : "+ JSON.stringify(data))
   
   setCount(data[0].count)
  
  //  console.log("count : "+ JSON.stringify(ticket.count))
  setLoading(false)

  if (data[0] == (null||undefined)){
    window.location.href = 'https://www.winmooney.com/#/rooms';
  }
  if(data[0].count == 0){
    deleteTicket()
   window.location.href = 'https://www.winmooney.com/#/rooms';


  }
  }
  catch(error) {
    alert("error in veryfy ticket: "+error.message)
    //window.location.href = 'https://www.winmooney.com/#/rooms';
}
}
    React.useEffect(() => {
      console.log("id: "+ id);
       verifyTicket();
      console.log("Ticket: "+ticket)



    }, [])
    

    return(
        <div className="img2">
            <div className="shade2">
        <div className=' autosy
                grid grid-cols gap 4 align-middle justify-center items-center'>
        { loading &&
          <Box sx={{ width: '100%' }}>
          <LinearProgress />
         </Box>  }


   {loading===false &&
   <>
        <div className="text-6xl text-center lg:text-7xl text-white p-10 font-extrabold">
            La Roue Qui Tourne x{count} ...
        </div>

          <div className='autos scara'>
            <Button onClick={whenClicked}
             size="large" sx={ { borderRadius: 28,
            padding: 3, } }  
             variant="contained" color = "warning"
            >
               {clicked && <ThemeProvider theme={theme}>
                <CircularProgress indeterminate
           color="primary" thickness={9}/>
           </ThemeProvider> }

           {clicked===false &&
             <p className='text-xl font-extrabold'>Jouer Maintenant</p>}
              
            </Button>
            </div>
            </>
          }
            </div>
            </div>
            </div>
    )

}