import React from 'react';
import BasicCard from '../Components/BasicCard';

import { db } from '../firebase';
import {collection, getDocs, addDoc, doc,  setDoc, deleteDoc } from '@firebase/firestore'
import FadeIn from 'react-fade-in';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
const [misses, setMisses] = useState([{name:"Check your internet connection"}])
const candidateCol= collection(db, "Candidates");

const [m, setM] = useState(0)
function sub(e){
    console.log(e, " stored")
    window.location.href = '/Main/Votes'
 localStorage.setItem("@candidateName", JSON.stringify(e));
 setM(1);
}

const navigate = useNavigate();

    const getItems = async (n)=> {
        try {
          const data = await getDocs(n);
          setMisses(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
        } catch (error) {
          
        }}

        useEffect(() => {
          getItems(candidateCol)
          },[m]
        )
        
    return (
        <div className=' '>

            <FadeIn 
            delay= {"1000"}
            className='container container-sm m4'>
                
               
            <BasicCard 
            name="Select your favourite"
            link="https://nodeassets.nbcnews.com/cdnassets/projects/socialshareimages-bento/og-select1200x630.png"
            id="0"/>

{
    misses.map((miss) => 
    <BasicCard 
    sub={() => sub(miss.name)
    }
    name={miss.name}
    link={miss.link}
    id={miss.votes}
    />
      )
}

           </FadeIn>

            </div>
      );
}

export default MainPage;