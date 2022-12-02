import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import '../index.css';
import { useState, useEffect } from 'react';
import { namedQuery } from 'firebase/firestore';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { CardActions } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


import { db } from '../firebase';
import {collection, getDoc, addDoc, doc,  setDoc, deleteDoc } from '@firebase/firestore'


function VotingPage() {
    const[name, setName]= useState("No Candidate selected");
    const [votes, setVotes] = useState(0);
    const price = votes*200;
    const [selectedCandidate, setSelectedCandidate]= useState("oops");
    const [clicked, setClicked] = useState(0);
    const [phone, setPhone] = useState("000000000");
    const [mCode, setMCode] = useState("0")
    const [oCode, setOcode] = useState("#150*2")

    const [mtn, setMtn]=useState(false);
    const [orange, setOrange]=useState(false);

    async function getSelectedCandidate(n) {
        try {
            const candidateCol= collection(db, "Candidates");
            const candidate =  await getDoc(doc(candidateCol, name));
            setSelectedCandidate(candidate.data());
            console.log(selectedCandidate);   
        } catch (error) {
          console.log(error);  
        }
       
    }

    useEffect( () => {
        const name1 = JSON.parse(localStorage.getItem('@candidateName'));
        if (name1) {
         setName(name1);
        }
        console.log(clicked)
        getSelectedCandidate(name);
         //getSelectedCandidate();

      }, [name]);

    return (
    <div className="container">
<Card sx={{ maxWidth: 345 }} className="fild">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={selectedCandidate.link}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {selectedCandidate.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          -Hello, my name is {selectedCandidate.name}, I'm a Level {selectedCandidate.level} student at ICT unversity
            studying {selectedCandidate.major}
            <br />
            -I really enjoy playing {selectedCandidate.hobby}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

      <Box className='fild'
 sx={{
    width: 350,
    maxWidth: "100%",
  }}>
      <TextField
      fullWidth
          required
          id="filled-required"
          label="Candidate Name:"
          defaultValue={name}
          value={name}
          variant="filled"
          color='success'
        />
      </Box>
    

<Box className='fild'
 sx={{
    width: 350,
    maxWidth: "100%",
  }}>
      <TextField 
      fullWidth id="filled-basic"
      type='number'
      value={votes}
      onChange={(e)=>setVotes(e.target.value)}
       label="Number of votes " 
       variant="filled"
        color="secondary" />
      </Box>

      <Box className='fild'
 sx={{
    width: 350,
    maxWidth: "100%",
  }}>
      <TextField
      fullWidth
          id="filled-required"
          label="Cost:"
          defaultValue={price}
          value={price}
          variant="filled"
          color='success'
        />
      </Box>

      {clicked>=1
       &&
<div>
      <Stack sx={{ width: '100%' }} spacing={2}>
    
      <Alert severity="info">Select the payment method</Alert>
   
    </Stack>

    <Card className="fild"
    sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://www.bitrefill.com/content/cn/b_rgb%3Afdca03%2Cc_pad%2Ch_600%2Cw_800/v1574704159/mtn.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           MTN Mobile Money
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <FormControlLabel control={<Switch  color="success"
        onChange={()=>{setMtn(!mtn);
            console.log("MTN: ", mtn)}}
        
        />} label="Select"  />

      </CardActions>
    </Card>




    <Card className="fild"
    sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://pic.clubic.com/v1/images/1691448/raw?fit=smartCrop&height=795&width=1060&hash=1833a41e57330823fccbb6d12fdda0b39a81e4b0"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Orange Money
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <FormControlLabel control={<Switch color="warning" 
        onChange={()=>{setOrange(!orange);
        console.log("orange: ", orange)}}
        />} label="Select"  />
        
      </CardActions>
    </Card>
    </div>
      }


<Paper
            className="fild"
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 350,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <LocalPhoneIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Your phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </Paper>



      <Box 
      className='bu2'
      sx={{
        width: 500 ,
        maxWidth: "100%",
      }}> 
      <Button
      onClick={() =>setClicked(clicked+1)}
       variant="contained" 
       size="large"
        color="secondary"
        startIcon={<NavigateNextIcon />} >
          Continue
        </Button>
        </Box>
    
    </div> 
     );
}

export default VotingPage;