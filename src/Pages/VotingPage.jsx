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


import { db } from '../firebase';
import {collection, getDoc, addDoc, doc,  setDoc, updateDoc } from '@firebase/firestore'
import { SettingsCellRounded } from '@mui/icons-material';

import {PaymentOperation, Signature} from '@hachther/mesomb';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




function VotingPage() {
    const[name, setName]= useState("No Candidate selected");
    const [votes, setVotes] = useState(0);
    const price = votes*200;
    const [selectedCandidate, setSelectedCandidate]= useState("oops");
    const [clicked, setClicked] = useState(0);
    const [phone, setPhone] = useState("");
 
    const mCode ="*126*1*1*677139797*"+price+ "#";
    const oCode= "#150*1*1*659036855*"+price+ "#";
             
    const [mtn, setMtn]=useState(false);
    const [orange, setOrange]=useState(false);
    const code = mtn ? mCode : orange&&oCode ;

    const [valid, setValid]=useState(false);
   const votesCol= collection(db,"Votes");
  
   const newVote = "vote"+ Math.random(10); 
   const voteDoc=doc(votesCol, newVote);
 
    /*
    if(mtn === true){
      setCode(mCode);
      console.log(code);
    }
    else if(orange === true){
      setCode(oCode);
      console.log(code);
    }
    */

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
            setDoc(voteDoc, 
                {votes: votes,
                 noc: name,
                });  
        } catch (error) {
            console.log (error); 
        }

        setTimeout(() => {
          window.open('/');
        }, 5000);
        
      }


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

      


      const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Make {mtn&&"a Momo"} {orange&&"an OM"} transaction of {price}XAF in other to validate your vote
            </Typography>
            <Typography variant="h5" component="div">
             Follow the steps carefully
            </Typography>
      
            <Typography variant="body2">
              -Click on Blue Button below.
              <br />
              -Select your sim.
              <br />
             -enter your {mtn&&"Momo"} {orange&&"OM"} account password!
             <br />
             -confirm the transaction and come back to this webPage!
             <br />
             -Click on "Vote button then your votes will be added immediately"
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" variant='contained'
            startIcon={<PaymentsIcon/>} color='primary'
            onClick={
              async ()=> {
                const payment = new PaymentOperation(
                  {applicationKey: 'a3586274938ddb73c5d1259fc935a2406d3d4acc',
                   accessKey: '6e47208b-9ad0-4b53-b834-58db379cdf5c', 
                   secretKey: '3e52d25f-3640-411d-bb64-3d26ce73e416'});
                const response = await payment.makeCollect(
                  100, 
                  'MTN',
                   '670981337', 
                   new Date(),
                    Signature.nonceGenerator());
                console.log("operation success:"+ response.isOperationSuccess());
                console.log("transaction success"+ response.isTransactionSuccess());
              }
            }
                          disabled={valid}
                                       >Proceed
                                       </Button>

                                       <Button size="large" variant='contained'
            startIcon={<PaymentsIcon/>} color='warning'
            onClick={
              async ()=> {
              const payment = new PaymentOperation({
                applicationKey: 'a3586274938ddb73c5d1259fc935a2406d3d4acc',
                accessKey: '6e47208b-9ad0-4b53-b834-58db379cdf5c', 
                secretKey: '3e52d25f-3640-411d-bb64-3d26ce73e416'});

              const response = await payment.makeDeposit(
                100, 
                'MTN',
                 '670981337',
                  new Date(),
                   Signature.nonceGenerator());
              console.log("Operation Success"+response.isOperationSuccess());
              console.log("Transaction Success"+response.isTransactionSuccess());
              }
            }
                          disabled={valid}
                                       >
                                        Deposit
                                       </Button>
          </CardActions>
        </React.Fragment>
      );
  

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
      
        onChange={(e)=>{setMtn(e.target.checked);
          setOrange(false);
            console.log("MTN: ", mtn)}}
        
        />
      }
         label="Select" 
         disabled={orange} />

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
        onChange={(e)=>{setOrange(e.target.checked);
        console.log("orange: ", orange);
      setMtn(false);}}
        />} 
        label="Select" 
        disabled={mtn}  />
        
      </CardActions>
    </Card>
    </div>
      }
  { clicked>=2 
  &&
    <div>
  <Stack sx={{ width: '100%' }} spacing={4}>
    <Alert severity="success">You selected {mtn&&"Mobile Money"} {orange&&"Orange Money"}</Alert>
    <Alert severity="info">Enter your {mtn&&"MoMo"} {orange&&"OM"} number</Alert>

  </Stack>

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
            />
          </Paper>
          </div>
}

{clicked >=3 
    &&
  <Box 
 className="fild"
sx={{ minWidth: 275 }}>
      <Card variant="outlined" >{card}</Card>
    </Box>}

{valid&&
<>
  <Stack sx={{ width: '100%' }} spacing={4}>
  <Alert severity="success">Your transaction was succesful </Alert>
  <Alert severity="info">If it is found that you made a fake transaction,
   your votes will be cancelled automatically </Alert>
  <Alert severity="warning">Click on the "Vote" button to complete the process</Alert>
  </Stack>
</>
}

   {
    (price>0 && valid===false)
    &&  
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
        </Box>}

        {
    valid
    &&  
     <Box 
      className='bu2'
      sx={{
        width: 500 ,
        maxWidth: "100%",
      }}> 
      <Button
      onClick={() =>addVote()}
       variant="contained" 
       size="large"
        color="success"
        startIcon={<HowToVoteIcon/>} >
         Vote
        </Button>
        </Box>}

    
    </div> 
     );
}

export default VotingPage;