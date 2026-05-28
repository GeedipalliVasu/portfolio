import React from 'react'
import './App.css'
import {  Mail } from 'lucide-react'
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import ragimg from "./assets/rag.png"; 
import agri from "./assets/agri.png";
import { Brain, Code2, Database } from "lucide-react";

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
            <a className='btn btn-primary' id='projects' href="#projects">View My Work</a>
            <a className='btn btn-secondary' href="Vasu_Resume_.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
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
    <section className='projects' id='projects'>
      <div className='container'>
        <h2>Featured Projects</h2>

        <div className="project">
          <div className="project-content">
            <span className='project-date'>Jan 2025 – Mar 2025</span>
            <h3>RAG System for Legal Question Answering</h3>
            <p>Developed a production-grade Retrieval-Augmented Generation pipeline using Qwen 3-4B and FAISS to answer queries on Indian constitutional articles with 88% retrieval accuracy.</p>
            <div className="achievements">
              <p><strong>Key Achievements:</strong></p>
              <ul>
                <li>88% retrieval accuracy on 500-article test set</li>
                <li>Sub-2 second query response time</li>
                <li>30% reduction in irrelevant retrievals</li>
              </ul>
            </div>
            <a className="project-link" href="https://github.com/GeedipalliVasu/Legal-Rag" target='_blank' rel='noopener noreferrer'>
            <LuGithub size={18} />View Code
            </a>
            <div className="tech-stack">
            {['Qwen', 'FAISS', 'React', 'Express', 'MongoDB', 'LangChain'].map((tech) => (
            <span key={tech} className="tech-tag">{tech}
            </span>
            ))}
            </div>
          </div>
          <div className="project-image">
            <img src={ragimg} alt="RAGIMG" />
          </div>
        </div>
        <div className='project project-reverse'>
            
            <div className="project-content">
              <span className='project-date'>Aug 2024 – Nov 2024</span>
              <h3>Agri-LLaVA: AI Plant Disease Detection</h3>
              <p>Engineered an AI-powered system combining CNN classifiers with Stable Diffusion to detect plant diseases and predict progression, enabling farmers to take preventive action 1-2 growth stages earlier.</p>
              <div className="achievements">
                <p><strong>Key Achievements:</strong></p>
                <ul>
                  <li>91% validation accuracy on 3,000-image dataset</li>
                  <li>Real-time disease progression visualization</li>
                  <li>Interactive chatbot with sub-3 second response time</li>
                </ul>
              </div>
              <a className="project-link" href="https://github.com/GeedipalliVasu/Agri-Llava-Project" target='_blank' rel='noopener noreferrer'>
              <LuGithub size={18}/> View Code
              </a>
              <div className="tech-stack">
                <div className="tech-stack">
                  {['PyTorch', 'CNN', 'Stable Diffusion', 'Flask', 'OpenCV', 'Python'].map((tech) => (
                  <span key={tech} className="tech-tag">
                  {tech}
                  </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-image">
              <img src={agri} alt="AGRI-IMG"/>
            </div>
        </div>
      </div>
    </section>
    <section className='skills' id='skills'>
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3><Brain size={32} className="skill-icon"/>AI & ML</h3>
            <ul>
              <li>Machine Learning & Deep Learning</li>
              <li>NLP & RAG Pipelines</li>
              <li>Computer Vision & CNNs</li>
              <li>Diffusion Models</li>
              <li>Transfer Learning</li>
              <li>Model Optimization</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3><Code2 size={32} className="skill-icon"/>Frameworks</h3>
            <ul>
              <li>TensorFlow & PyTorch</li>
              <li>Hugging Face Transformers</li>
              <li>LangChain & FAISS</li>
              <li>React.js & Express.js</li>
              <li>Docker & Kubernetes</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3><Database size={32} className="skill-icon"/>Languages & DB</h3>
            <ul>
              <li>Python, Java, JavaScript</li>
              <li>SQL & NoSQL Databases</li>
              <li>MongoDB & MySQL</li>
              <li>REST APIs</li>
              <li>Jupyter & VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className='education'>
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {[
            {
              degree:"B.Tech in Computer Science & AI/ML",
              institution: 'Keshav Memorial College of Engineering, Hyderabad',
              year: '2023 – Present',
              details: "Relevant Coursework: Machine Learning , Deep Learning , LLM's"
            },
            {
              degree: 'Intermediate (PCM)',
              institution: 'Narayana Junior College',
              year: '2023',
              details: '85% | Physics, Chemistry, Mathematics',
            },
            {
              degree: 'SSC',
              institution: 'Narayana Olympiad School',
              year: '2021',
              details: '100%',
            }
          ].map((edu,idx)=>(
            <div key={idx} className="education-item">
              <h3>{edu.degree}</h3>
              <p className='institution'>{edu.institution}</p>
              <p className='year'>{edu.year}</p>
              <p className='details'>{edu.details}</p>
            </div>
          ))}
        </div>
      </div>                  
    </section>
    <section id='contact' className='contact'>
      <div className="container">
        <h2>Let's Connect</h2>
        <p>I'm always interested in discussing AI/ML projects, internship opportunities, and innovative ideas. Feel free to reach out!</p>
        <div className="contact-buttons">
          <a  href="mailto:vasu.geedipalli1@gmail.com" className="project-link"  target='_blank' rel='noopener noreferre'>
            <Mail size={20} /> Email Me
          </a>
          <a className="project-link" href="https://www.linkedin.com/in/geedipalli-vasu-rao/" target='_blank' rel='noopener noreferrer'>
            <FiLinkedin  size={20} />Linkedin
          </a>
          <a className="project-link" href="https://github.com/GeedipalliVasu" target='_blank' rel='noopener noreferrer'>
            <LuGithub size={18} />GitHub
          </a>
        </div>
        <p className='copyright'>© 2026 Geedipalli Vasu Rao. All rights reserved.</p>
      </div>
    </section>
  </div>
  );
}

