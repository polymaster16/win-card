import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './Pages/App';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import Cards from './Pages/Cards';
import Home2 from './Pages/Home2';
import Cards2 from './Pages/Cards2';


const router = createBrowserRouter([
  {
    path: "/:id",
    element: <Home/>,
  },
  {
    path: "/luck/:id",
    element: <Cards/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
  , 
  {
    path: "/x5/:id",
    element: <Home2/>,
  },
  {
    path: "/luck/x5/:id",
    element: <Cards2/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <div className="img1">
  <div className="shade1">
    <RouterProvider router={router} />
    </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
