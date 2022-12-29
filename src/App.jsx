// import { useForm } from 'react-hook-form'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App;