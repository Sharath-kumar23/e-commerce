import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  const  content= useRoutes(routes);

  return (
    <div className="App">
    {/* <Naav /> */}
    <div className="main">
     {content}
    </div>
    {/* <Footer />
    <ToastContainer position="top-right" />
    <ToastContainer /> */}
  </div>
  );
}

export default App;
