import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const ErrorPage = () => {
    const history = useHistory();
  
    return <h1 onClick={() => { history.push("/") }}>
      Wrong page! going to Home page
      </h1>
  }
  
export default ErrorPage;