import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/Main';
import TopBar from './Components/TopBar';
import WelcomePage from './Pages/WelcomePage';
import CandidateInfo from './Pages/CandidateInfo';
import VotingPage from './Pages/VotingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <BrowserRouter>
 <TopBar/>
 <Routes>
 <Route exact path='/' element={<HomePage />}></Route>
 <Route exact path='/Welcome' element={<WelcomePage />}></Route>
 <Route exact path='/Main' element={<MainPage />}></Route>
 <Route exact path='/App' element={<App />}></Route>
 <Route exact path='/CandidateInfo' element={<CandidateInfo />}></Route>
 <Route exact path='/VotingPage' element={<VotingPage />}></Route>

    </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
