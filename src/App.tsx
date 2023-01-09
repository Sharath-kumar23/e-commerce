import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import ResponsiveAppBar from './components/Naav/Naav';
import routes from './routes';
import { ToastContainer } from "react-toastify";

function App() {
  const  content= useRoutes(routes);

  return (
    <div className="App">
    {<ResponsiveAppBar/>}
    <div className="main">
     {content}
    </div>
   <Footer />
   <ToastContainer position="top-right" />
      <ToastContainer />
  </div>
  );
}

export default App;
