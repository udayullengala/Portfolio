import React, { useState } from 'react'
import { Fade } from 'react-reveal';

const Experience = () => {

    const fullStackKnowledge = ['Html', 'Css', 'Scss', 'JavaScript', 'Bootstrap', 'jQuery', 'React', 'Python', 'Django', 'MySQL']
    const frontEndKnowledge = ['Html', 'Css', 'JavaScript', 'Bootstrap', 'jQuery']

    const [content, setContent] = useState("experience")

    return (
        <Fade bottom>
            <div className='container py-5'>
                <div className="d-flex justify-content-start align-items-center gap-3">
                    <h5 className={`white cursor-pointer skillHeader ${content === "experience" ? "active" : ''}`} onClick={() => setContent('experience')}>Experience</h5>
                    <h5 className={`white cursor-pointer skillHeader ${content === "education" ? "active" : ''}`} onClick={() => setContent('education')}>Education</h5>
                </div>
                {
                    content === "experience" ? (
                        <>
                            <div className="exContent py-4">
                                <div className="row mb-4">
                                    <div className="years col-md-2">
                                        <h6 className='text-nowrap'>2022 - Present</h6>
                                    </div>
                                    <div className="details col-md-10">
                                        <h6 className='white'>Full-Stack Developer</h6>
                                        <p>
                                            Created and managed products, enhancing the company's online presence and sales performance. 
                                            Worked closely with backend developers to integrate APIs and data, ensuring seamless functionality.
                                            Developed new website features while troubleshooting issues for uninterrupted user experiences.
                                            Used version control systems to track changes, ensuring efficient teamwork.
                                        </p>
                                        <div className="skills d-flex justify-content-start align-items-center flex-wrap gap-2">
                                            {
                                                fullStackKnowledge.map((curElem, key) => {
                                                    return (
                                                        <>
                                                            <div className="skill" key={key}>
                                                                {curElem}
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="years col-md-2">
                                        <h6 className='text-nowrap'>Apr 2022 - Aug 2022</h6>
                                    </div>
                                    <div className="details col-md-10">
                                        <h6 className='white'>Frontend Developer Internship</h6>
                                        <p>
                                            I gained hands-on experience in crafting user interfaces by
                                            utilizing HTML, CSS, and JavaScript. This involved not only
                                            creating visually appealing designs but also ensuring responsive
                                            layouts that adapt seamlessly to various screen sizes and
                                            devices
                                        </p>
                                        <div className="skills d-flex justify-content-start align-items-center flex-wrap gap-2">
                                            {
                                                frontEndKnowledge.map((curElem, key) => {
                                                    return (
                                                        <>
                                                            <div className="skill" key={key}>
                                                                {curElem}
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="eduContent py-4">
                                <div className="row mb-4">
                                    <div className="years col-md-2">
                                        <h6 className='text-nowrap'>2021 - Present</h6>
                                    </div>
                                    <div className="details col-md-10">
                                        <h6 className='white'>Bachelor's degree Computer Science | University of Mumbai</h6>
                                        <p>
                                            My Bachelor's degree in Computer Science equipped me with a solid foundation in key technical concepts and practical skills. Throughout my academic journey, I delved into diverse subjects such as programming languages, algorithms, database management, and software engineering. This educational experience honed my analytical thinking, problem-solving abilities, and provided me with the necessary expertise to excel in the field of web development and technology.
                                        </p>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="years col-md-2">
                                        <h6 className='text-nowrap'>2019 - 2021</h6>
                                    </div>
                                    <div className="details col-md-10">
                                        <h6 className='white'>HSC | SIWS</h6>
                                        <p>
                                            This educational milestone provided me with a comprehensive understanding of core subjects and instilled essential skills in critical thinking, problem-solving, and effective communication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                
            </div>

        </Fade>
    )
}

export default Experience