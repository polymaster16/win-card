import wheelB1 from '../assets/wheelB1.png';
import wheel2 from '../assets/wheel2.png';
import Modal0 from '../Components/Modal0'
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal1 from '../Components/Modal1';
import axios from 'axios';
import {PaymentOperation, Signature} from '@hachther/mesomb';
import Modal2 from '../Components/Modal2';
import Modal3 from '../Components/Modal3';

import database from '../supabase';



function Wheel() {

    const [currentPosition, setCurrentPosition] = useState('rotate(0deg)');
    const myDivRef = useRef();
    const randomNumber = Math.floor(Math.random() * 15) + 1;

const [pos1, setPos1] = useState({
    transform: 'rotate(0deg)'
});

    const [open0, setOpen0] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [loading, setLoading] = useState(false)


    const [mtnSelected, setMtnSelected]= useState(false);
    const [orangeSelected, setOrangeSelected]= useState(false);
    const [paymentMethods, setPaymentMethods]= useState();
    const [phoneNumber, setPhoneNumber]= useState();

async function pay(amount){
  console.log(phoneNumber)
  setLoading(true)
  try {
    const payment = new PaymentOperation(
      {applicationKey: '614337b48566fd6aa0abf08502b9ac95376193b7',
       accessKey: '6e47208b-9ad0-4b53-b834-58db379cdf5c',
        secretKey: '3e52d25f-3640-411d-bb64-3d26ce73e416'});
  
      const response = await payment.makeDeposit(amount,
    paymentMethods, 
     phoneNumber, 
     new Date(), Signature.nonceGenerator());
  
  console.log(response.isOperationSuccess());
  console.log(response.isTransactionSuccess());

  if(response.isOperationSuccess || response.isTransactionSuccess){
    alert("succesful transaction. Check your balance")
    window.location.href = 'https://www.winmooney.com/#/rooms';
  }

  } catch (error) {
    console.log(error)
    alert("Error: "+ error.message + "---Verifiez vos informations et recommencez")
    //pay(amount);
    setLoading(false)
    setPhoneNumber("");

  }
 
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
  setLoading(false)

  if (data[0] == (null||undefined)){
    window.location.href = 'https://www.winmooney.com/#/rooms';
  }

  }
  catch(error) {
    alert("error: "+error.message)
    window.location.href = 'https://www.winmooney.com/#/rooms';
}
}




function spin1000(){
    const myDiv = myDivRef.current;

    myDiv.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ], {
      duration: 1000,
      iterations: 7
    })
    
    setTimeout(() => {
      myDiv.animate([
          { transform: 'rotate(360deg)' },
          { transform: 'rotate(420deg)' }
        ], {
          duration: 500,
          iterations: 1
        });
    }, 7000);

  setPos1({transform: 'rotate(420deg)'});
  setTimeout(() => {
    setOpen3(true);
  }, 8000);
}

 function spin0A(){
    const myDiv = myDivRef.current;

    myDiv.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ], {
      duration: 1000,
      iterations: 7
    })
    
    setTimeout(() => {
      myDiv.animate([
          { transform: 'rotate(360deg)' },
          { transform: 'rotate(540deg)' }
        ], {
          duration: 500,
          iterations: 1
        });
    }, 7000);

  setPos1({transform: 'rotate(540deg)'});

  setTimeout(() => {
    setOpen0(true);
  }, 8200);

}

function spin50(){
    const myDiv = myDivRef.current;

    myDiv.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ], {
      duration: 1000,
      iterations: 7
    })
    
    setTimeout(() => {
      myDiv.animate([
          { transform: 'rotate(360deg)' },
          { transform: 'rotate(630deg)' }
        ], {
          duration: 700,
          iterations: 1
        });
    }, 7000);

  setPos1({transform: 'rotate(630deg)'});

  setTimeout(() => {
    setOpen1(true);
  }, 8400);
}
    

function spin500(){
    const myDiv = myDivRef.current;

    myDiv.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ], {
      duration: 1000,
      iterations: 7
    })
    
    setTimeout(() => {
      myDiv.animate([
          { transform: 'rotate(360deg)' },
          { transform: 'rotate(710deg)' }
        ], {
          duration: 1000,
          iterations: 1
        });
    }, 7000);

  setPos1({transform: 'rotate(710deg)'});
  setTimeout(() => {
    setOpen2(true);
  }, 8800);
}
    
const { id } = useParams();
    
    useEffect(() => {
      console.log("id: "+ id)
      verifyTicket();
       console.log("randomNumber: " + randomNumber);
        if(randomNumber === 1){
            spin1000();
        } else
        if((randomNumber > 0) && (randomNumber< 6)){
            spin0A();
        } else
        if((randomNumber > 11) && (randomNumber< 16)){
            spin0A();
        } else
        if(randomNumber === 6){ 
            spin500();
        } else
        if( (randomNumber > 6) && (randomNumber< 12)){
            spin50();
        }
    
          
    }, []);


    return (
        <div className='tc'>
             <div className="wheelB">
            <img 
            src={wheelB1} alt="No ig found"/>

             <div className="wheel1">
            <img ref={myDivRef} style={pos1}
             src={wheel2} alt="No ig found"/>
              </div> 
               </div>
       
           <Modal0 open = {open0} 
           handleClose={()=>{
            setOpen0(false)
            deleteTicket();

             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}/>

<Modal1 open = {open1} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(50)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setOpen1(false)
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           
           />
       
       <Modal2 open = {open2} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(500)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setOpen2(false)
           await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           />
  
  <Modal3 open = {open3} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(1000)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setOpen3(false)
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           />
               </div>  
    );
}

export default Wheel;