import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/Main';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';
import WelcomePage from './Pages/WelcomePage';
import CandidateInfo from './Pages/CandidateInfo';
import VotingPage from './Pages/VotingPage';
import SelectCandidate from './Pages/SelectCandidate';
import VoteNormally from './Pages/VoteNormally';
import Success from './Pages/Success';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Links from './Pages/Links';
import NavBar from './Components/NavBar';
import Stats from './Pages/Stats';
import GalleryPage from './Pages/Gallery';


const theme = createTheme({
    palette: {
      primary: {
        main: "#00A6FF",
      },
      secondary: {
        main: "#292929",
      },
      success: {
        main: '#0FA402',
      },
    },
  });
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


 <BrowserRouter>
 <ThemeProvider theme={theme}>
 <TopBar/></ThemeProvider>
 
 <Routes>
 <Route exact path='/' element={<ThemeProvider theme={theme}><HomePage /></ThemeProvider>}></Route>
 <Route exact path='/Welcome' element={<WelcomePage />}></Route>
 <Route exact path='/Main' element={<MainPage />}></Route>
 <Route exact path='/App' element={ <ThemeProvider theme={theme}><App /></ThemeProvider>}></Route>
 <Route exact path='/CandidateInfo' element={ <ThemeProvider theme={theme}><CandidateInfo /></ThemeProvider>}></Route>
 <Route exact path='/Main/VotingPage' element={ <ThemeProvider theme={theme}><VotingPage /></ThemeProvider>}></Route>
 <Route exact path='/selectCandidate' element={ <ThemeProvider theme={theme}><SelectCandidate /></ThemeProvider>}></Route>
 <Route exact path='/Success' element={ <ThemeProvider theme={theme}><Success /></ThemeProvider>}></Route>

 <Route exact path='/Main/Votes' element={<ThemeProvider theme={theme}><VoteNormally /></ThemeProvider>}></Route>
 <Route exact path='/Link' element={<ThemeProvider theme={theme}><Links /></ThemeProvider>}></Route>
 <Route exact path='/Stats' element={<ThemeProvider theme={theme}><Stats /></ThemeProvider>}></Route>
 <Route exact path='/Gallery' element={<ThemeProvider theme={theme}><GalleryPage /></ThemeProvider>}></Route>

    </Routes>

    
    <BottomBar/>

    </BrowserRouter>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
