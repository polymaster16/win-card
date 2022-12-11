import React from 'react';
import '../index.css'

function WelcomePage() {
    return (
      
        <div className='container container-lg'>

            <h1 className='welcome'>
                Bienvue aux miss/ masters ICTU édition 2022
            </h1>

            <div className='ictuLogo'>
           
            </div>


  <div >
            <button className='voteButton' onClick={() => {
    window.location.href = '/Main';
  }}>Voter</button>
             <br/>
            <button  className='deposerButton'
             onClick={() => {
                window.location.href = '/CandidateInfo';
              }}>Deposer une Candidature</button>

            </div>
        </div>
      
      );
}

export default WelcomePage;