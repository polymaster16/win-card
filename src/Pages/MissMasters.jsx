import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {Button, CircularProgress} from '@mui/material'
import {PaymentOperation, Signature} from '@hachther/mesomb';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'; // Install this package if you haven't already
import { client2 } from "../sanityclient";

export default function Dropbot(){
 const [loading, setLoading] = useState(false)

 const location = useLocation();
  const queryParams = queryString.parse(location.search);

  // Extract the parameters into variables
  // const userName = queryParams.userName || '';
  const paymentOperator = queryParams.paymentOperator || '';
  const paymentNumber = queryParams.paymentNumber || '';
  const paymentAmount = queryParams.paymentAmount || '';
  const candidateID = queryParams.candidateID || '';
 const no_votes = queryParams.noVotes || '';
  const votesToAdd = (paymentAmount==='100'? 1 : (paymentAmount==='300'? 3 :paymentAmount==='500'? 6 :(paymentAmount==='1000'? 13:(paymentAmount==='5000'?68:0)))) 

    async function pay(amount){
       // console.log(phoneNumber)
       console.log(no_votes,'nov --- voa',votesToAdd)
        setLoading(true)
        try {
          const payment = new PaymentOperation(
            {applicationKey: 'a3586274938ddb73c5d1259fc935a2406d3d4acc ',
             accessKey: '6e47208b-9ad0-4b53-b834-58db379cdf5c',
              secretKey: '3e52d25f-3640-411d-bb64-3d26ce73e416'});
        
              const response = await payment.makeCollect(
                paymentAmount, 
                paymentOperator,
                 paymentNumber, 
                 new Date(),
                  Signature.nonceGenerator());        
        console.log(response.isOperationSuccess());
        console.log(response.isTransactionSuccess());
      
        if(response.isOperationSuccess || response.isTransactionSuccess){
          client2.patch(candidateID)
          .set({no_votes: parseInt(no_votes)+parseInt(votesToAdd)})
          .commit()
          .then(()=>{

          alert("Succesful transaction!! Your votes were computed.")
          window.location.href = 'https://www.dropbot.online/success'
          })
          .catch((err)=>{
            console.log(err)
          })

        }
      
        } catch (error) {
          console.log(error)
          // window.location.href = 'https://www.dropbot.online/error'
          //navigate(`/x5/${id}`)      
          //pay(amount);
          setLoading(false)
         // setPhoneNumber("");
        }
       
      }

    return(
        <div className='pt-[200px] pb-[500px]  px-9 bg-green-900 text-gray-50 '>
            <p className="font-bold text-xl text-center mb-2"> 🤖 COMICT-U</p>
            <p className="text-left">📰 Hello {paymentNumber}, You'll see a popup on your screen after proceeding to payment.</p>
            <p className="text-left">⏰ If the popup doesnt show within 45 seconds , dial {paymentOperator ==='MTN'?<span className='font-bold text-yellow-600'>*126#</span>:<span className='font-bold text-orange-600'>#150*50#</span>} and validate the transaction. </p>
            <p className="text-left">🚨🚨🚨 Make sure you keep a screenshot or screencapture of this transaction. It's very important.</p>

            {/* <p>Payment Operator: {paymentOperator}</p>
            <p>Payment Number: {paymentNumber}</p>
            <p>Payment Amount: {paymentAmount}</p> */}
{     !loading ?     
  <button onClick={()=>pay()} class='p-2 bg-blue-600 rounded-sm mt-4 font-bold'>CLICK ON THIS BUTTON</button>
    :   <button class='p-2 bg-blue-600 rounded-full mt-4 font-bold spins p-2'>🪙</button>

}      
      
        </div>
    )
}