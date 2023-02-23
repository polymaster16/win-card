import wheelB1 from '../assets/wheelB1.png';
import wheel2 from '../assets/wheel2.png';
import Modal0 from '../Components/Modal0'
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal1 from '../Components/Modal1';
import axios from 'axios';
import {PaymentOperation, Signature} from '@hachther/mesomb';
import Modal2 from '../Components/Modal2';
import Modal3 from '../Components/Modal3';

import database from '../supabase';



function Wheel2() {

    const [currentPosition, setCurrentPosition] = useState('rotate(0deg)');
    const myDivRef = useRef();
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const navigate = useNavigate()

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
      {applicationKey: 'b107e205bd537796171458c1339ed29c7d684c69',
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
    navigate(`/${id}/x7`)
    //window.location.href = 'https://www.winmooney.com/#/rooms';
  }

  } catch (error) {
    console.log(error)
    alert("Error: "+ error.message + "---Verifiez vos informations et recommencez")
    navigate(`/${id}/x7`)
    //pay(amount);
    setLoading(false)
    setPhoneNumber("");

  }
 
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
        if(randomNumber === 44){
            spin1000();
        } else
        if((randomNumber >= 0) && (randomNumber<= 30)){
            spin0A();
        } else
        if((randomNumber > 44) && (randomNumber<= 50)){
            spin0A();
        } else
        if(randomNumber === 6){ 
            spin500();
        } else
        if( (randomNumber > 30) && (randomNumber< 44)){
            spin50();
        }
    
          
    }, []);


    return (
        <div className="img2">
        <div className="shade2">
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
            navigate(`/${id}/x7`)
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
            navigate(`/${id}/x7`)

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
            navigate(`/${id}/x7`)

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
            navigate(`/${id}/x7`)

           }}
           loader={loading}
           phone={phoneNumber}
           />
               </div>   </div>  </div> 
    );
}

export default Wheel2;