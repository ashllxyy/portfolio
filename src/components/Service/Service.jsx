import React from 'react'
import './Service.css'

export default function Service() {
  return (
    <div className='services-page'>
        <div className='service-container'>
            <div className='service-item'>
                <div className='service-item-title'>
                    Front-End
                </div>
                <div className='service-item-text'>
                    I specialize in crafting visually appealing and highly functional applications. I have built applications that lean towards both ends, delivering delightful user experiences.
                </div>
            </div>
            <div className='service-item'>
                <div className='service-item-title'>
                    Back-End
                </div>
                <div className='service-item-text'>
                    I have experience in building and setting up scalable backends from the ground up. I have also participated in large teams aiding in setting up large scale systems.
                </div>
            </div>
            <div className='service-item'>
                <div className='service-item-title'>
                    Full Stack
                </div>
                <div className='service-item-text'>
                    Need a full app from start to finish? Let's get that ready for you. I have mastered a wide range of technologies to help you build your perfect product.
                </div>
            </div>
        </div>
        <div className='projects-container'>
            PROJECTS COMING SOON
        </div>
    </div>
  )
}
