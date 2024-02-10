import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <>
   <div className="footer text-white py-5 " >
   <div className="container-flued overflow-hidden">
        <div className="row py-4">
            <div className="col-md-4 text-center">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center">
                <h2>AROUND THE WEB</h2>
                <div className="d-flex justify-content-center">
                    <div className="icon mx-1 ">
                    <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="icon mx-1">
                    <i className="fa-brands fa-twitter"></i>
                    <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="icon mx-1  ">
                    <i className="fa-brands fa-linkedin"></i>
                    <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className="icon mx-1 ">
                    <i className="fa-solid fa-globe"></i>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
            </div>
        </div>
    </div>
    </div>
    <div className="copyright text-center text-white py-3 ">
            <p>Copyright &copy; Your Website 2021</p>
    </div>
    </>
  )
}
