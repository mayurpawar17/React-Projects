import React from 'react'
import { Header } from '../components/Header'
import '../assets/styles/home.css';
import { NoteCard } from '../components/NoteCard';

const Home = () => {
  return (
    <div className='home-container'>
        <Header/>
        <NoteCard title={"Reading Book"} content={"Main Topics"}/>

    </div>
  )
}

export default Home