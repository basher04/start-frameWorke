import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
  return (
    <>
    <div className="portfolio navMargin">
    <div className="container  d-flex justify-content-center align-items-center">
        <div className="caption text-center pt-5">
            <h1 className="fw-bolder">PORTFOLIO COMPONENT</h1>
            <div className='starIconPortfolio mb-2' >
            <i className="fa-solid fa-star fs-5" />
            <FontAwesomeIcon icon={faStar} size="lg" />
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row g-5 mb-5">
            <div className="col-md-4">
                <div className="item">
                    <img src="images/poert1.png" className="w-100 rounded-3" alt="" />
                    <div className='imgCover rounded-3 d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faPlus} className='plusIcon' />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item">
                    <img src="images/port2.png" className="w-100 rounded-3" alt="" />
                    <div className='imgCover rounded-3 d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faPlus} className='plusIcon' />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item">
                    <img src="images/port3.png" className="w-100 rounded-3" alt="" />
                    <div className='imgCover rounded-3 d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faPlus} className='plusIcon' />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item">
                    <img src="images/poert1.png" className="w-100 rounded-3" alt="" />
                    <div className='imgCover rounded-3 d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faPlus} className='plusIcon' />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item">
                    <img src="images/port2.png" className="w-100 rounded-3" alt="" />
                    <div className='imgCover rounded-3 d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faPlus} className='plusIcon' />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item">
                    <img src="images/port3.png" className="w-100 rounded-3" alt="" />
                    <div className='imgCover rounded-3 d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon icon={faPlus} className='plusIcon' />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    </>
  )
}
