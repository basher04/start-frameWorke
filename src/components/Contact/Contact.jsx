import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <>
    <div>
    <div className="container navMargin d-flex justify-content-center align-items-center">
        <div className="caption text-center pt-5">
            <h1 className="fw-bolder">CONTACT SECTION</h1>
            <div className='starIconPortfolio mb-2' >
            <i className="fa-solid fa-star fs-5" />
            <FontAwesomeIcon icon={faStar} size="lg"/>
            </div>
        </div>
    </div>
    <div className="d-flex  align-items-center flex-column my-5">
        <input className="form-control w-50 my-4" type="text" placeholder='UserName' />
        <input className="form-control w-50 my-4 " type="text" placeholder='UserAge' />
        <input className="form-control w-50 my-4" type="text" placeholder='UserEmail' />
        <input className="form-control w-50 my-4" type="text" placeholder='UserPassword' />
        <button className="btn btn-primary">send Massage</button>
    </div>
    </div>
    </>
  )
}
