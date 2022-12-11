
import React from 'react';
import BasicCard from '../Components/BasicCard';

import { db } from '../firebase';
import {collection, getDocs, addDoc, doc,  setDoc, deleteDoc } from '@firebase/firestore'
import FadeIn from 'react-fade-in';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';


function Stats() {
    const [misses, setMisses] = useState([{name:"Database not loaded"}])
    const [sortedMisses, setSortedMisses] = useState([{name:"Database not loaded"}])

    const candidateCol= collection(db, "Candidates");
    const[ol, setOL]= useState('a');
    
    function dynamicSort(property) {
        var sortOrder = -1;
        if(property[0] === "-") {
            sortOrder = 1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    function sub(e){
        console.log(e, " stored")
        window.location.href = '/Main/Votes'
     localStorage.setItem("@candidateName", JSON.stringify(e));
    }
    
    const navigate = useNavigate();
    
        const getItems = async (n)=> {
            try {
              const data = await getDocs(n);
              setMisses(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
              setSortedMisses(misses.sort(dynamicSort("votes")));
             console.log(misses);
             setOL('them')
            } catch (error) {
              
            }}
    
            useEffect(() => {
              getItems(candidateCol);
            
}, [ol]
);

            


    return ( 
    
   <div className=' '>

<FadeIn 
delay= {"1300"}
className='container container-sm m4'>
<Box

key={Math.random(10)} ml={"auto"}
mr={"auto"}
 mt={"3rem"} 
 mb={"3rem"}>
   <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Votes Stats
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Here, candidates are listed in order of vote count.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>

{
sortedMisses.map((doc) => <Box

key={Math.random(10)} ml={"auto"}
mr={"auto"}
 mt={"3rem"} 
 mb={"3rem"}><Card sx={{ maxWidth: 345 }} 
>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image={doc.link}
    alt="photo"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     { doc.name}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {doc.votes} votes
    </Typography>
  </CardContent>
</CardActionArea>
</Card>
</Box>
)
}
<Box

key={Math.random(10)} ml={"auto"}
mr={"auto"}
 mt={"3rem"} 
 mb={"3rem"}>
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Other Stats
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Information concering candidate.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Box>
</FadeIn>

    </div>
     );
}

export default Stats;