import React from 'react'
import { BiLogoInstagram, BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi';

const SocialMedia = () => {
  return (
    <>
        <a href='https://github.com/udayullengala' target="_blank" rel="noreferrer" className="socailmedia-icon">
          <BiLogoGithub size={'22px'} />
        </a>
        <a href='https://www.linkedin.com/in/uday-ullengala-bb2aa11b8/' target="_blank" rel="noreferrer" className="socailmedia-icon">
          <BiLogoLinkedinSquare size={'22px'} />
        </a>
        <a href="https://www.instagram.com/__uday_27/" target="_blank" rel="noreferrer" className="socailmedia-icon">
          <BiLogoInstagram size={'22px'} />
        </a>
    </>
  )
}

export default SocialMedia