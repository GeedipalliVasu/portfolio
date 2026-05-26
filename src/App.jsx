import React from 'react'
import './App.css'
import {  Mail } from 'lucide-react'
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";


export default function App() {

  return (
    <div className='Home'>
      <nav className='navbar'>
        <div className='container'>
          <div className='nav-brand'>Vasu Rao</div>
          <div className='nav-links'>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <section className='hero'>
        <div className='container'>
          <h1>AI/ML Engineer</h1>
          <p>Building intelligent systems that solve real-world problems. Specialized in Retrieval-Augmented Generation, Computer Vision, and Deep Learning architectures.</p>
          <div className='button-group'>
            <button className='btn btn-primary'>View My Work</button>
            <button className='btn btn-secondary'>Download Resume</button>
          </div>
          <div className='social-links'>
            <a href="https://github.com/GeedipalliVasu" target='_blank' rel='noopener noreferrer'>
              <LuGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/geedipalli-vasu-rao/" target='_blank' rel='noopener noreferrer'>
              <FiLinkedin  size={24} />
            </a>
            <a href="mailto:vasu.geedipalli1@gmail.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

