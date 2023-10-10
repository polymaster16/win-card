import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {Button, CircularProgress} from '@mui/material'
import {PaymentOperation, Signature} from '@hachther/mesomb';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'; // Install this package if you haven't already

export default function Dropbot(){
 const [loading, setLoading] = useState()

 const location = useLocation();
  const queryParams = queryString.parse(location.search);

  // Extract the parameters into variables
  const userName = queryParams.userName || '';
  const paymentOperator = queryParams.paymentOperator || '';
  const paymentNumber = queryParams.paymentNumber || '';
  const paymentAmount = queryParams.paymentAmount || '';


    async function pay(amount){
       // console.log(phoneNumber)
        setLoading(true)
        try {
          const payment = new PaymentOperation(
            {applicationKey: '32c29ba64f8774db5a12cdba12f4efb346048183',
             accessKey: 'a10f86a0-8f0d-466d-abc8-0c661fbd8908',
              secretKey: 'fed6eb8f-45af-4fbc-8393-900672116260'});
        
              const response = await payment.makeCollect(
                paymentAmount, 
                paymentOperator,
                 paymentNumber, 
                 new Date(),
                  Signature.nonceGenerator());        
        console.log(response.isOperationSuccess());
        console.log(response.isTransactionSuccess());
      
        if(response.isOperationSuccess || response.isTransactionSuccess){
          alert("succesful transaction. Check your balance")
          window.location.href = 'https://www.dropbot.online/success'
        }
      
        } catch (error) {
          console.log(error)
          window.location.href = 'https://www.dropbot.online/error'
          //navigate(`/x5/${id}`)      
          //pay(amount);
          setLoading(false)
         // setPhoneNumber("");
        }
       
      }

    return(
        <div className='pt-[200px] pb-[500px]  px-9 bg-green-900 text-gray-50 '>
            <p className="font-bold text-xl text-center mb-2"> 🤖 DropBot</p>
            <p className="text-left">📰 Hello {userName}, You'll see a popup on your screen after proceeding to payment.</p>
            <p className="text-left">⏰ If the popup doesnt show within 45 seconds , dial {paymentOperator ==='MTN'?<span className='font-bold text-yellow-600'>*126#</span>:<span className='font-bold text-orange-600'>#150*50#</span>} and validate the transaction. </p>
            <p className="text-left">🚨🚨🚨 Make sure you keep a screenshot or screencapture of this transaction. It's very important.</p>

            {/* <p>Payment Operator: {paymentOperator}</p>
            <p>Payment Number: {paymentNumber}</p>
            <p>Payment Amount: {paymentAmount}</p> */}
            <button onClick={()=>pay()} class='p-2 bg-blue-600 rounded-sm mt-4 font-bold'>CLICK HERE TO PROCEED</button>
        </div>
    )
}