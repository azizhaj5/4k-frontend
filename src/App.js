import './App.css';
import React from 'react';
import Header from './components/header';
import FeedbackForm from './components/feedbackForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <FeedbackForm />
    </div>
  );
}

export default App;