import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
    <div className="home navMargin">
    <div className="container py-3  d-flex justify-content-center align-items-center">
        <div className="caption text-center text-white">
            <img src="images/avataaars.svg" className="w-75" alt="" />
            <h1 className="fw-bolder mt-5">START FRAMEWORK</h1>
            <div className='starIcon mb-2' >
            <i class="fa-solid fa-star fs-5 "></i>
            <FontAwesomeIcon icon={faStar} size="lg"/>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </div>
    </>
  )
}
