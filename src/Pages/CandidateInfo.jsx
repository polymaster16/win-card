import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../index.css'
import MailIcon from '@mui/icons-material/Mail';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccountCircle from '@mui/icons-material/AccountCircle';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import LinkIcon from '@mui/icons-material/Link';
import { db } from '../firebase';
import {collection, getDocs, addDoc, doc,  setDoc, deleteDoc } from '@firebase/firestore'
import { useState, useEffect } from 'react';

function CandidateInfo() {

const [name, setName] = useState("your_name");
const [email, setEmail] = useState("your_email");
const [link, setLink] = useState("your_email");
const [level, setLevel] = useState("your_Level");
const [major, setMajor] = useState("your_Major");
const [hobby, setHobby] = useState("your_Hobbies");
const [votes, setVotes] = useState(0);

const [clicked, setClicked] = useState(0);

const candidateCol= collection(db, "Candidates");


const sub = ()=>{ 
  const candidate = doc(candidateCol ,name);
  console.log(name+" added");
 setDoc(candidate, {name:name, 
  level:level, 
  major:major, 
  hobby:hobby,
  votes:votes,
  link:link,
  email:email, 
  });
  setClicked(1);

}


    return (
        <div className="container container-sm">
        <div className="hh">  <h4 >About You: </h4></div>

          <Box
            className="fild"
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Name"
              id="fullWidth"
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          <Box
            className="fild"
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Level"
              id="fullWidth"
              onChange={(e) => setLevel(e.target.value)}
            />
          </Box>

          <Box
            className="fild"
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Major"
              id="fullWidth"
              onChange={(e) => setMajor(e.target.value)}
            />
          </Box>

          <Box
            className="fild"
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="What are our hobbies"
              id="fullWidth"
              onChange={(e) => setHobby(e.target.value)}
            />
          </Box>

          <h6 className="hh">
            {" "}
            -My name is {name}, I'm a Level {level} student<br /> at ICT unversity
            studying {major}
            <br />
            -I really enjoy playing {hobby}
          </h6>

          <h4 className="hh">Your infos: </h4>

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
              <MailIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>


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
              <LinkIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Image Link"
              onChange={(e) => setLink(e.target.value)}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>

          <Button
          className="bu2"
          onClick={() => sub()}
       variant="contained" 
       size="large"
        color="secondary"
        startIcon={<NavigateNextIcon />} >
          Submit My Application
        </Button>

        {clicked==1 && <Stack sx={{ width: '100%' }} spacing={5} className="fild">
    
    <Alert severity="success">You applied successfully</Alert>
   
  </Stack>}

       
          
        </div>
     
    );
}

export default CandidateInfo;