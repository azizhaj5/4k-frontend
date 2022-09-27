import './App.css';
import React from 'react';
import Header from './Components/header';
import FeedbackForm from './Components/feedbackForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <FeedbackForm />
    </div>
  );
}

export default App;