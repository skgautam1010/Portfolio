import React from 'react'
import './About.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import aboutVector from './../assets/about_vector.png';
import aboutAnime from './../assets/about_anime.gif';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="section-container">
            <Header 
                headings="About Me"
                details="MCA Student | Full Stack Web Developer | Coding Pragmatist |"
                />
            <div className='about-main'>
                <div className='about-main-left'>
                <h2 className='about-sub-head'>Student</h2>
                    <p className='about-details'>
                        I am highly organized and detail-oriented student,
                        Skilled in developement <br></br> and coding, always passionate in learning new skills.
                        Do Check Out 
                        <Link
                            className='about-link-element'
                            to='/projects'
                        >
                             &nbsp;the works carried out by me.
                        </Link>

                    </p>
                    {/* Sub section 1 */}
                    <h2 className='about-sub-head1'>Educational Qualifications</h2>
                    <h3 className='about-sub-head'>R V College Of Engineering(RVCE)</h3>
                    <p className='about-details'>
                        <ul>Degree : Master Of Computer Applications </ul>
                        <ul>Cumulative Grade Points Average (CGPA) : 8.97/10.00 </ul>
                        <ul>Check Out{' '}
                        <a
                            className='about-link-element'
                            href='https://www.rvce.edu.in/'
                            target= "_blank"
                            rel="noreferrer"
                        >
                            My College Website
                        </a></ul>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Birla Institute Of Technology(BIT Mesra)</h3>
                    <p className='about-details'>
                        <ul>Degree : Bachelor Of Computer Applications</ul>
                        <ul>Cumulative Grade Points Average (CGPA) : 8.04/10.00</ul>
                        <ul>Check Out{' '}
                        <a
                            className='about-link-element'
                            href='https://www.bitmesra.ac.in/'
                            target="_blank"
                            rel="noreferrer"
                        >
                            My College Website
                        </a>
                        </ul>
                    </p>
                    
                    
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer
                phrase='Check out my '
                link='skills!'
                toAdress='/skills'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>   
        </div>
    )
}


export default About;