import React from 'react'
import './AboutMe.css'
import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <div className='about-me-page'>
        {/* <video autoPlay muted loop id="about-me" style={{ zIndex: '0',height: '100vh', position: 'absolute', top: '0', left: '0', width: '100%'}}>
          <source src="/about-me.mp4" style={{}} type="video/mp4"></source>
        </video> */}
       
        <div style={{zIndex: '1'}}>
            <h1 className='about-me-title'>Hi, I'm Arunesh</h1>
        </div>

        <div className='about-me-text'>
        An ambitious leader with a strong passion for software, I specialize in DEVELOPMENT with a focus on MERN stack, Next.js, and Flask. My expertise extends to crafting visually appealing and highly functional applications. I have background in analytics and machine learning—utilizing technologies like PyTorch, NumPy, and Pandas. Thriving in collaborative, agile settings, I bring innovative solutions to the forefront. Let's connect with each other!
        </div>
        {/* <div className='about-me-avatar'></div> */}
        <div className='about-me-links-1'>
           
            <a href="https://github.com/ashllxyy">GITHUB</a>
            <a href="https://github.com/ashllxyy">LINKED-IN</a>
            <a href="https://github.com/ashllxyy">LEETCODE</a>
        </div>
          <div className='about-me-links-2'>
            
            <a href="https://github.com/ashllxyy">GITHUB</a>
            <a href="https://github.com/ashllxyy">LINKED-IN</a>
            <a href="https://github.com/ashllxyy">LEETCODE</a>
          </div>
        </div>
  )
}
