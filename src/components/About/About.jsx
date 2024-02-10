import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <>
    
    <div className="home navMargin p-5">
    <div className="container py-3  d-flex justify-content-center align-items-center">
        <div className="caption text-center text-white pt-5">
            <h1 className="fw-bolder">ABOUT COMPONENT</h1>
            <div className='starIcon mb-2' >
            <i class="fa-solid fa-star fs-5"></i>
            <FontAwesomeIcon icon={faStar} size="lg"/>

            </div>
        </div>
    </div>
    <div className="text-white d-flex justify-content-center pb-5">
        <p className="mx-4">Freelancer is a free bootstrap theme created by Route. The <br /> download includes the complete source files including HTML, CSS, and <br /> JavaScript as well as optional SASS stylesheets for easy<br /> customization.</p>
        <p className="mx-4">Freelancer is a free bootstrap theme created by Route. The <br />  download includes the complete source files including HTML, CSS, and <br /> JavaScript as well as optional SASS stylesheets for easy<br /> customization.</p>
    </div>
    </div>
    </>
  )
}
