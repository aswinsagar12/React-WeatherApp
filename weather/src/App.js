import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { Component } from 'react';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
      <Form />
    </div>
  );
}

export default App;
