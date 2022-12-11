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
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PaymentsIcon from '@mui/icons-material/Payments';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import {collection, getDoc, addDoc, doc,  setDoc, updateDoc } from '@firebase/firestore'
import { SettingsCellRounded } from '@mui/icons-material';
import FadeIn from 'react-fade-in';
import {PaymentOperation, Signature} from '@hachther/mesomb';
import VisibilityIcon from '@mui/icons-material/Visibility';


function Success() {

    const[name, setName]= useState("No Candidate selected");
    const[disabled, setDisabled]= useState(false);
    const navigate = useNavigate();
    const votes = localStorage.getItem('@votes');
    const[message, setMessage] = React.useState("")

    const votesCol= collection(db,"Votes");
  
    const newVote = "vote"+ Math.random(10); 
    const voteDoc=doc(votesCol, newVote);

    const [selectedCandidate, setSelectedCandidate]= useState("oops");

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

    const addVote =()=>{
        const candidateDoc=doc(db,"Candidates",name);
  
        try {
          setDoc(candidateDoc,
            {
              name: name,
              level: selectedCandidate.level,
              hobby: selectedCandidate.hobby,
              major: selectedCandidate.major,
              link: selectedCandidate.link,
              email: selectedCandidate.email,
              votes:parseInt(parseInt(selectedCandidate.votes) + parseInt(votes)),
            });
            console.log("voted ");
        } catch (error) {
          console.log(error);
        }
    
        try {
            setMessage("button clicked again")
            setDoc(voteDoc, 
                {votes: votes,
                 noc: name,
                });  
        } catch (error) {
            console.log (error); 
        }

        setDisabled(true)
        setTimeout(() => {
          navigate("/");
        }, 5000);
        
      }


    useEffect( () => {
        const name1 = JSON.parse(localStorage.getItem('@candidateName'));
        if (name1) {
         setName(name1);
        }
        getSelectedCandidate(JSON.stringify(name));
      }, 
      [name]);
  
    return ( 
        <div>
           <FadeIn
    delay={1000}>
            <Stack sx={{ width: '100%' }} spacing={1}>
            <FadeIn
    delay={700}>
  <Alert severity="success">Payment succesful </Alert>
  <Alert severity="info">Thanks much for your vote, its really appreciated. 
  It will help {selectedCandidate.name} to become MISS ICT UNIVERSITY </Alert>
 </FadeIn>
  </Stack>


  <Typography 
mt={"2rem"}
 ml={"1rem"} 
 mr={"1rem"}

 textAlign={"center"}
  variant="h3"> You gave {votes} votes to {selectedCandidate.name} </Typography>
       

       <Typography 
mt={"2rem"}
 ml={"1rem"} 
 mr={"1rem"}

 textAlign={"center"}
  variant="h3"> {selectedCandidate.name} now has {selectedCandidate.votes}Votes</Typography>
       

<Box 

      ml={"25%"}
      mt={"15%"}
      mb={"15%"}
      sx={{
        width: 3000 ,
        maxWidth: "100%",
      }}>

      <Button
      disabled={disabled}
      onClick={() => navigate('/Main')}
       variant="contained" 
       size="large"
        color="success"
        startIcon={<VisibilityIcon/>} >
         View your Votes
        </Button>
        </Box>
        </FadeIn>
             </div>
     );
}

export default Success;