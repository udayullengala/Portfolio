import React from 'react'
import ecommerce from "@src/assets/E-commerce.png"
import portfolio from "@src/assets/Uday-Ullengala.png"
import { IoIosArrowRoundUp } from "react-icons/io";
import { Fade } from 'react-reveal';

const Projects = () => {

    const prjects = [
        {
            image: ecommerce,
            title: "E-commerce",
            description: "I orchestrated the creation of a dynamic e-commerce platform, blending frontend expertise in HTML, CSS, and JavaScript to craft an intuitive online store. Collaborating seamlessly with backend teams, I ensured robust functionality, secure transactions, and a seamless user experience. My focus on user-centric design and analytics-driven enhancements optimized the platform for engaging and converting customers.",
            link: "https://github.com/udayullengala"
        },
        {
            image: portfolio,
            title: "Portfolio",
            description: "Discover my passion translated into pixels! Explore a curated collection of my most innovative projects, showcasing a blend of creativity, precision, and cutting-edge design. Each piece tells a unique story of problem-solving and artistic ingenuity.",
            link: "https://github.com/udayullengala"
        }
    ]

    return (
        <Fade bottom>
            <div className='container py-5'>
                <h5 className='white'>Projects</h5>
                <div className="projects py-4">
                    {
                        prjects?.map((curElem, key) => {
                            return (
                                <>
                                    <div className="project row mb-4" key={key}>
                                        <div className="img col-md-2">
                                            <img src={curElem?.image} alt="img" style={{width: '100%', borderRadius: '5px'}} />
                                        </div>
                                        <div className="details col-md-10">
                                            <div className="title white d-flex justify-content-start align-items-center gap-1 mb-1">
                                                <a href={curElem?.link} target='_blank' rel="noreferrer" className='m-0 white'>{curElem?.title}</a>
                                                <span style={{rotate: '45deg'}}><IoIosArrowRoundUp color='#fff' size={'18px'} /></span>
                                            </div>
                                            <p>{curElem?.description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </Fade>
    )
}

export default Projects