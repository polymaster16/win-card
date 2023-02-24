import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import cardBack from "../assets/cardBack.png"
import CardComponent from "../Components/CardComponent";
import database from '../supabase';
import {PaymentOperation, Signature} from '@hachther/mesomb';

function Cards() {
    const [visible, setVisible] =useState([true, true, true, 
        true, true, true, true, true, true, true, true, true])
    const randomNumber = Math.floor(Math.random() * 12) + 1;

    const [paymentMethods, setPaymentMethods]= useState();
    const [phoneNumber, setPhoneNumber]= useState();
    const [open3, setOpen3] = useState(false)
    const [loading, setLoading] = useState(false)
    const { id } = useParams();



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
    function win(){
   if (randomNumber==1){
    setVisible([false, true, true, true, true, true, true, true, true, true, true, true])
   } else
   if (randomNumber==2){
    setVisible([true, false, true, true, true, true, true, true, true, true, true, true])
   } else
   if (randomNumber==3){
    setVisible([true, true, false, true, true, true, true, true, true, true, true, true])
   } else
   if (randomNumber==4){
    setVisible([true, true, true, false, true, true, true, true, true, true, true, true])
   } else
   if (randomNumber==5){
    setVisible([true, true, true, true, false, true, true, true, true, true, true, true])
   } else
   if (randomNumber==6){
    setVisible([true, true, true, true, true, false, true, true, true, true, true, true])
   } else
   if (randomNumber==7){
    setVisible([true, true, true, true, true, true, false, true, true, true, true, true])
   } else
   if (randomNumber==8){
    setVisible([true, true, true, true, true, true, true, false, true, true, true, true])
   } else
   if (randomNumber==9){
    setVisible([true, true, true, true, true, true, true, true, false, true, true, true])
   } else
   if (randomNumber==10){
    setVisible([true, true, true, true, true, true, true, true, true, false, true, true])
   } else
   if (randomNumber==11){
    setVisible([true, true, true, true, true, true, true, true, true, true, false, true])
   } else
   {
    setVisible([true, true, true, true, true, true, true, true, true, true, true, false])
   }   }


   useEffect(() => {
   
    return () => {
     deleteTicket()
    }
  }, [])

    return (
        <>
        
        <CardComponent open = {!visible[0]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(95)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setVisible([false, true, true, 
                true, true, true, true, true, true, true, true, true]);
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           image="https://cdn.pixabay.com/photo/2020/06/05/07/58/apple-5261893_960_720.png"
           message="100xaf"
           />

<CardComponent open = {!visible[1]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(97)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setVisible([true, false, true, 
                true, true, true, true, true, true, true, true, true]);
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           image="https://cdn.pixabay.com/photo/2018/02/24/10/03/orange-3177693_960_720.png"
           message="100xaf"
           />


<CardComponent open = {!visible[2]} 
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
            setVisible([true, true, false, 
                true, true, true, true, true, true, true, true, true]);
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           image="https://cdn.pixabay.com/photo/2019/12/01/10/23/pizza-4665131_960_720.png"
           message="500xaf"
           />

<CardComponent open = {!visible[3]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setVisible([true, true, true, 
                false, true, true, true, true, true, true, true, true]);
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           image="https://cdn.pixabay.com/photo/2015/08/19/22/29/pig-896747_960_720.png"
           message="10xaf"
           />


<CardComponent open = {!visible[4]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setVisible([true, true, true, 
                true, false, true, true, true, true, true, true, true]);
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           image="https://cdn.pixabay.com/photo/2014/12/21/23/50/donut-576139_960_720.png"
           message="10xaf"
           />


<CardComponent open = {!visible[5]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(25)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            setVisible([true, true, true, 
                true, false, true, true, true, true, true, true, true]);
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           image="https://cdn.pixabay.com/photo/2023/02/07/02/14/donuts-7773080_960_720.png"
           message="25xaf"
           />


<CardComponent open = {!visible[6]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
        handleChange = {(e) => 
          {setPaymentMethods(e.target.value)
            console.log(paymentMethods)
          }}
        handleClose={async()=>{
            await deleteTicket();
             window.location.href = 'https://www.winmooney.com/#/rooms'
           }}
           loader={loading}
           phone={phoneNumber}
           image="https://cdn.pixabay.com/animation/2022/08/31/08/22/08-22-38-791_512.gif"
           message="10xaf"
           />


<CardComponent open = {!visible[7]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
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
           image="https://cdn.pixabay.com/photo/2015/08/19/22/29/pig-896747_960_720.png"
           message="10xaf"
           />


<CardComponent open = {!visible[8]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
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
           image="https://cdn.pixabay.com/photo/2013/07/13/14/06/gingerbread-162141_960_720.png"
           message="10xaf"
           />


<CardComponent open = {!visible[9]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
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
           image="https://cdn.pixabay.com/animation/2022/08/31/08/22/08-22-38-791_512.gif"
           message="10xaf"
           />


<CardComponent open = {!visible[10]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
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
           image="https://cdn.pixabay.com/photo/2014/04/02/17/06/cookie-307960_960_720.png"
           message="10xaf"
           />


<CardComponent open = {!visible[11]} 
        paymentMethods ={paymentMethods}
        onChangePhoneNumber = {(e) => {
          setPhoneNumber(e.target.value);
        console.log(e.target.value);
      }}
        pay={()=>pay(10)} 
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
           image="https://cdn.pixabay.com/photo/2020/06/17/12/33/peach-5309316_960_720.png"
           message="10xaf"
           />
      
      
       <div class="superGrid">
    
    { visible[0] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[1] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[2] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[3] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[4] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[5] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[6] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[7] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[8] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[9] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[10] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
    { visible[11] && <div onClick={()=>win()} className="superGridDiv"><img src={cardBack}/></div> }
       </div> 
       </>
      );
}

export default Cards;