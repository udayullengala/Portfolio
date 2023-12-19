import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='container py-5'>
        <h5 className='white'>Get in Touch</h5>
        <div className='contactContent py-3'>
            <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
                    <div className="mycontact d-flex justify-content-start align-items-center gap-2 my-3">
                        <div className="icon white">
                            <FaPhoneAlt size={'18px'} />
                        </div>
                        <h6 className='m-0'>9398930461</h6>
                    </div>
                    <div className="mycontact d-flex justify-content-start align-items-center gap-2 my-3">
                        <div className="icon white">
                            <IoMail size={'18px'} />
                        </div>
                        <h6 className='m-0'>u.ullengala@gmail.com</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact