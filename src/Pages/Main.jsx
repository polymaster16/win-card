import React from 'react';
import BasicCard from '../Components/BasicCard';

import { db } from '../firebase';
import {collection, getDocs, addDoc, doc,  setDoc, deleteDoc } from '@firebase/firestore'

import { useState, useEffect } from 'react';

function MainPage() {
const [misses, setMisses] = useState([{name:"Miss"}])
const candidateCol= collection(db, "Candidates");

function sub(e){
    console.log(e, " stored")
    window.location.href = '/VotingPage';
 localStorage.setItem("@candidateName", JSON.stringify(e));
}

    const getItems = async (n)=> {
        try {
          const data = await getDocs(n);
          setMisses(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
        } catch (error) {
          
        }}

        useEffect(() => {
          getItems(candidateCol)
          }
        )
        
    return (
        <div className=' '>
            <p>
                2022 Edition
            </p>
            <div className='container container-sm m4'>
                
               
            <BasicCard sub={() => sub}/>

{
    misses.map((miss) => 
    <BasicCard 
    sub={() => sub(miss.name)}
    name={miss.name}
    link={miss.link}
    id='2224'
    />
      )
}

           </div>

            </div>
      );
}

export default MainPage;