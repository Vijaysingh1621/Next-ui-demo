"use client"
import React, { useState } from 'react'
import axios from 'axios';






const Home = () => {

  const[weather,setWeather]=useState(null);
  const[city,setCity]=useState("");

  const fetchWeather= async()=>{
    try{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=60e5fbc22848d3d14bf0c0123f9380c7`)
      console.log(response)
    }catch{
      console.error("Error fetching weather data:",error)
    }
  }
  return (
    <div className='container'>
      <form onSubmit={(e)=>{
        e.preventDefault();
        fetchWeather();
      }}>
        <input type='text' placeholder='enter city' value={city} onChange={(e)=>setCity(e.target.value)}></input>
        <button type='submit'>search</button>

      </form>
      <p></p>
    </div>
  )
}

export default Home
