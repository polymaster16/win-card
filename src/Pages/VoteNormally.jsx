import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import '../index.css';
import { useState, useEffect } from 'react';
import { namedQuery } from 'firebase/firestore';

import FadeIn from 'react-fade-in';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Fade from '@material-ui/core/Fade';
import PaymentsIcon from '@mui/icons-material/Payments';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import Divider from '@mui/material/Divider';
import { db } from '../firebase';
import {collection, getDoc, addDoc, doc,  setDoc, updateDoc } from '@firebase/firestore'
import { AspectRatio, SettingsCellRounded } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Alert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CardActions } from '@mui/material';

import Grid from '@mui/material/Grid';
import {PaymentOperation, Signature} from '@hachther/mesomb';
import RowCard from '../Components/Card2';
import InteractiveCard from '../Components/Card2';
import { CardOverflow } from '@mui/joy';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

function VoteNormally() {

    const[name, setName]= useState("No Candidate selected");
    const [votes, setVotes] = useState(0);
    const [selectedCandidate, setSelectedCandidate]= useState("oops");
    const [valid, setValid]=useState();
    const [clicked, setClicked] = useState(0);
    const [price, setPrice] = useState(0);
  const [phone, setPhone] = useState("");
   const votesCol= collection(db,"Votes");
   const newVote = "vote_"+ new Date(); 
   const voteDoc=doc(votesCol, newVote);
   const [mtn, setMtn]= useState(false);
   const [orange, setOrange]= useState(false);

   const[disabled, setDisabled]= useState(false);
   const navigate = useNavigate();
   const[message, setMessage] = React.useState("") 

   
const[operator, setOperator]= useState("none")
 

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

function pack1(){

  handleClose();
  setPrice(100);
  setVotes(1);
  setClicked(1);
    //window.location.href = 'https://my.mesomb.com/fr/web/payment/?widget=329';
    localStorage.setItem("@votes", 1);
   
}

function pack2(){
  handleClose();
  setPrice(300);
  setVotes(3);
  setClicked(3);
    //window.location.href = 'https://s.htr.cm/6Zi7';
    localStorage.setItem("@votes", 3);
    //setOpen(false);
}

function pack3(){
  handleClose();
  setPrice(500);
    //window.location.href = 'https://my.mesomb.com/fr/web/payment/?widget=331';
    setClicked(1);
    localStorage.setItem("@votes", 6);
    setVotes(6);
}
function pack4(){
  handleClose();
     setPrice(1000);
    //window.location.href = 'https://my.mesomb.com/fr/web/payment/?widget=332';
    setClicked(1);
    localStorage.setItem("@votes", 13);
    setVotes(13);
}
function pack5(){
  handleClose();
  setPrice(5000);
    //window.location.href = 'https://s.htr.cm/393c';
    setClicked(1);
    localStorage.setItem("@votes", 68);
    setVotes(68);
}

const addVote1 =()=>{
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
           phone: phone,
           date: new Date(),
          });  
  } catch (error) {
      console.log (error); 
  }

  setDisabled(true)
  setTimeout(() => {
    navigate("/Success");
  },1000);
  
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

    const [orangeColor, setOrangeColor]= useState("#ffffff");
    const [mtnColor, setMtnColor]= useState("#ffffff");

    function orangeSelected(){
      setOrange(!orange);
      setMtn(false);
      setClicked(3);
      orange? setOrangeColor("#FFCBAC"):setOrangeColor("#FFFFFF");

    }

    function mtnSelected(){
      setMtn(!mtn);
      setOrange(false);
      setClicked(3);
            mtn? setMtnColor("#D4FDD1"): setMtnColor("#ffffff");

    }

   

    useEffect( () => {
        const name1 = JSON.parse(localStorage.getItem('@candidateName'));
        if (name1) {
         setName(name1);
        }
        mtn? setMtnColor("#D4FDD1"): setMtnColor("#ffffff");
        orange? setOrangeColor("#FFCBAC"):setOrangeColor("#FFFFFF");

        getSelectedCandidate(name);
         //getSelectedCandidate();

      }, [name, mtn, orange, price, phone ]);

      


    return (
        <div className='container'>
          <FadeIn
    delay={1000}>
<Card sx={{ maxWidth: 345 }} className="fild">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={selectedCandidate.link}
          alt="picture"
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

<div
className="fild" >
<Button
  variant="contained" 
  size="large"
 color="secondary"
   startIcon={<KeyboardArrowDownIcon/>}
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
>
 Select Vote package
</Button>
<Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>

  <MenuItem onClick={pack1}> <PaymentsIcon color="success"/> -  100frs --- 1 Vote</MenuItem>
  <MenuItem onClick={pack2}> <PaymentsIcon color="success"/> -  300frs --- 3 Votes</MenuItem>
  <MenuItem onClick={pack3}> <PaymentsIcon color="success"/> -  500frs --- 6 Votes</MenuItem>
  <MenuItem onClick={pack4}> <PaymentsIcon color="success"/> -  1000frs --- 13 Votes</MenuItem>
  <Divider />
  <MenuItem onClick={pack5}> <LocalMallIcon color="primary"/> -5000frs --- Grosse surprise.</MenuItem>
</Menu>
</div>
</FadeIn>


{clicked >=1 &&
<FadeIn
delay={600}
onComplete={()=> setClicked(2)}>
<Box mb={"1rem"}>
<Alert  color="secondary">You choose {price}XAF ---- {votes} Votes</Alert>
</Box>

<Box mb={"1rem"}>
<Alert  severity="info">Select a payment method</Alert>
</Box> 
</FadeIn>
}
   { clicked>=2
   &&
   <FadeIn
   delay={700}
   >
    <Card 
className="fild"
    sx={{ maxWidth: 345 }}
    onClick ={orangeSelected}>
       <CardActionArea>
    <Grid container spacing={0}  backgroundColor={orangeColor}>
  <Grid item xs={6} md={6}>
  <CardMedia
          component="img"
          height="130"
          image="https://pic.clubic.com/v1/images/1691448/raw?fit=smartCrop&height=795&width=1060&hash=1833a41e57330823fccbb6d12fdda0b39a81e4b0"
          alt="Oange cm"
        />
  </Grid>
  <Grid item xs={6} md={6}>

  <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Orange Money
          </Typography>
        </CardContent>
      
  </Grid>
  </Grid>
  </CardActionArea>
</Card >


  
<Card 
    row ={true}
className="fild"
    sx={{ maxWidth: 345 }}
    onClick ={mtnSelected}>
       <CardActionArea>
    <Grid container spacing={0} backgroundColor={ mtnColor
}>
  <Grid item xs={6} md={6}>
  <CardMedia
          component="img"
          height="120"
          image="https://www.bitrefill.com/content/cn/b_rgb%3Afdca03%2Cc_pad%2Ch_600%2Cw_800/v1574704159/mtn.jpg"
          alt="mtn cm"
        />
  </Grid>
  <Grid item xs={6} md={6} >

  <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Mobile Money
          </Typography>
        </CardContent>
      
  </Grid>
  </Grid>
  </CardActionArea>
</Card >
</FadeIn> 
}

{ clicked>=3
  &&
    <FadeIn
    delay={1000}>
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
          </FadeIn>
}
{
phone.length ===9 
&&

<FadeIn
delay={500}>
<Box mt={2} mb={5} ml={"25%"} mr={"auto"}>
<Button 
size="large" variant='contained'
            startIcon={<PaymentsIcon/>} color='primary'
            endIcon={clicked>=4 && <CircularProgress color="secondary" />}
            onClick={
              async ()=> {
                setClicked(4);
                mtn? setOperator('MTN') : setOperator('Orange');
                console.log(operator);console.log(phone);
                const payment = new PaymentOperation(
                  {applicationKey: 'a3586274938ddb73c5d1259fc935a2406d3d4acc',
                   accessKey: '6e47208b-9ad0-4b53-b834-58db379cdf5c', 
                   secretKey: '3e52d25f-3640-411d-bb64-3d26ce73e416'});
                const response = await payment.makeCollect(
                  price, 
                  operator,
                   phone, 
                   new Date(),
                    Signature.nonceGenerator());
                console.log("operation success:"+ response.isOperationSuccess());
                console.log("transaction success"+ response.isTransactionSuccess());
              
                if(response.isTransactionSuccess() && response.isOperationSuccess()){
                 addVote1();
                } else{
                  setClicked(5)
                }


              }
            }
                                       >
                                        Proceed
                                       </Button>
                                       </Box>
                                       
                                       </FadeIn>
}

{ clicked>=5
  &&
    <FadeIn
    delay={1000}>
  <Stack sx={{ width: '100%' }} spacing={4}>
    <Alert severity="warning">Dial {mtn&&"*126#"} {orange&&"#150#"} to confirm transction</Alert>
    <Alert severity="info">If it doesnt work, click on th "proceed" button again to retry</Alert>

  </Stack>
  </FadeIn>
  }

</div>
      );
}

export default VoteNormally;