import React from 'react';
import { Zoom } from 'react-reveal'
import TypeEffect from '../components/TypeWriter';
import SocialMedia from '../components/SocialMedia';
// import Resume from '../../src/assets/Resume.pdf';

const Home = () => {

  return (
    <>
      <div className="hero-section">
        <div className="container">
          <Zoom duration={1000}>
            <div className="row w-100">
              <div className="col-12">
                <div className="content-here d-flex justify-content-between align-items-center">
                    <div className="content-profile">
                      <h5>Hello I'm,</h5>
                      <h1 className='white'>Uday Ullengala</h1>
                      <h4>Experienced Full-Stack Developer, knowledge of <span className='white'><TypeEffect /></span></h4>
                      <p>I create seamless user experiences with clean, efficient code.</p>
                      <div className="actionbutton mt-5 d-flex justify-content-start align-items-center gap-2">
                        <a href="/" className='btn-secondary d-flex justify-content-center align-items-center gap-1'>Contect Me</a>
                      </div>
                      
                    </div>
                    <div className="socail-media d-flex justify-content-center align-items-start flex-column gap-3">
                      <SocialMedia />
                    </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  )
}

export default Home