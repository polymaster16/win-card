import React from 'react';
import { Link } from 'react-router-dom';

function Links () {
    return ( 
       <div className='container'>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/App">App</Link>
        </li>
        <li>
          <Link to="/Main">Select Candidate</Link>
        </li>
        <li>
          <Link to="/candidateInfo">Add Candidate</Link>
        </li>
        <li>
          <Link to="/selectCandidate">Playground</Link>
        </li>
        
      </ul>
      </div>
     );
}

export default Links;

