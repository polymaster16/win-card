import React from 'react';
import { Link } from 'react-router-dom';

function HomePage () {
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
          <Link to="/Main">Main</Link>
        </li>
        <li>
          <Link to="/candidateInfo">candidateInfo</Link>
        </li>
        <li>
          <Link to="/selectCandidate">selectCandidate</Link>
        </li>
      </ul>
      </div>
     );
}

export default HomePage;

