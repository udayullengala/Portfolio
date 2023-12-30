import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import SocialMedia from '../components/SocialMedia'

const Footer = () => {
  return (
    <div className='container py-5'>
        <div className='row'>
            <div className='col-md-6'>
                <h5 className='white mb-4'>Don't Hesitate to Reach Out</h5>
                <form action="">
                    <div className="form-group mb-3">
                        <label htmlFor="email" className='white'>Email</label>
                        <input type="email" id='email' className='form-control' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="message" className='white'>Message</label>
                        <textarea id='message' className='form-control' />
                    </div>
                    <div className="action pt-4">
                        <a href="" className="btn-secondary">
                            Submit
                        </a>
                    </div>
                </form>
            </div>
            
            <div className='col-md-6'>
                <h5 className='white mb-4'>&nbsp;</h5>
                <h6 className='pb-2'><span className='white'>Email</span>: u.ullengala@gmail.com</h6>
                <h6 className='pb-2'><span className='white'>Phone </span>: 9398930461</h6>
                <div className='text-white d-flex justify-content-start align-items-center gap-2'>
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer