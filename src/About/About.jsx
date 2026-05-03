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
                details="Software Developer 2 @ Epsilon (Publicis Groupe) | Java | AEM | Spring & Spring Boot | Microservices | Python | AI & ML"
            />
            <div className='about-main'>
                <div className='about-main-left'>

                    {/* Intro */}
                    <h2 className='about-sub-head'>Who Am I?</h2>
                    <p className='about-details'>
                        I don't just write code — I engineer solutions. With 3+ years at Epsilon (Publicis Groupe), 
                        I've shipped features on enterprise platforms serving millions, driven measurable impact across 
                        performance, security, and reliability, and taken full ownership from design to deployment. Outside of work, I push boundaries — from teaching machines to see, to making them talk. 
                        if you're looking for an engineer who thinks in systems, obsesses over quality, thrives 
                        in high-stakes environments and never stops learning —{' '}
                        <Link className='about-link-element' to='/contact'>
                                let's connect.
                        </Link>
                        <br/>
                        <Link className='about-link-element' to='/projects'>
                            See what I've built.
                        </Link>
                    </p>

                    {/* Work Experience */}
                    <h2 className='about-sub-head1'>Work Experience</h2>

                    <h3 className='about-sub-head'>Epsilon (Publicis Groupe) — Software Developer 2</h3>
                    <p className='about-details'>
                        <ul>Duration : April 2024 – Present | Bengaluru, Karnataka, India</ul>
                        <ul>Implemented email delivery by building an async Java Servlet service with Sling Jobs, integrated Microsoft Graph API for PDF bill delivery, Google reCAPTCHA for bot prevention, and Mailchimp API for subscriber management.</ul>
                        <ul>Designed REST API-backend clinic search integrating OneMap API to fetch geolocations and compute distances across 1,860 clinics, with multi-tier sorting.</ul>
                        <ul>Built a dynamic post-logout redirect feature for a federated banking loyalty platform — users are seamlessly returned to their originating bank's portal, with the destination resolved at runtime from their SAML identity token rather than a hardcoded URL.</ul>
                        <ul>Architected OSGi-configured scheduler pipeline to archive/purge 5,000+ content records with configurable business-rule exclusions and asset cleanup — reduced manual maintenance effort by 70%.</ul>
                        <ul>Engineered content migration via Java Servlets, reducing manual effort by 80% and increasing throughput by 50%.</ul>
                    </p>

                    <h3 className='about-sub-head'>Epsilon (Publicis Groupe) — Software Developer 1</h3>
                    <p className='about-details'>
                        <ul>Duration : Aug 2022 – March 2024 | Bengaluru, Karnataka, India</ul>
                        <ul>Enhanced reusable backend components, reducing feature delivery time by 40%.</ul>
                        <ul>Developed cookie consent service ensuring 100% regulatory compliance.</ul>
                        <ul>Resolved all critical/high CVEs from Veracode SAST/DAST scans — zero re-opened issues post-fix.</ul>
                        <ul>Implemented custom server-side and client-side tracking, improving data capture accuracy by 35%.</ul>
                    </p>

                    {/* Education */}
                    <h2 className='about-sub-head1'>Educational Qualifications</h2>

                    <h3 className='about-sub-head'>R V College Of Engineering (RVCE)</h3>
                    <p className='about-details'>
                        <ul>Degree : Master Of Computer Applications</ul>
                        <ul>Cumulative Grade Points Average (CGPA) : 9.11/10.00</ul>
                        <ul>Duration : Sept 2019 – Aug 2022 | Bengaluru, Karnataka, India</ul>
                        <ul>Relevant Coursework : DSA, OOPs, OS, DBMS, Computer Networks, Machine Learning, Cloud Computing, Big Data Analytics</ul>
                        <ul>Check Out{' '}
                            <a className='about-link-element' href='https://www.rvce.edu.in/' target="_blank" rel="noreferrer">
                                My College Website
                            </a>
                        </ul>
                    </p>

                    <h3 className='about-sub-head'>Birla Institute Of Technology (BIT Mesra)</h3>
                    <p className='about-details'>
                        <ul>Degree : Bachelor Of Computer Applications</ul>
                        <ul>Cumulative Grade Points Average (CGPA) : 8.04/10.00</ul>
                        <ul>Duration : June 2016 – May 2019 | Ranchi, Jharkhand, India</ul>
                        <ul>Relevant Coursework : DSA, OOPs, OS, DBMS</ul>
                        <ul>Check Out{' '}
                            <a className='about-link-element' href='https://www.bitmesra.ac.in/' target="_blank" rel="noreferrer">
                                My College Website
                            </a>
                        </ul>
                    </p>

                    {/* Certification */}
                    <h2 className='about-sub-head1'>Certifications</h2>
                    <h3 className='about-sub-head'>Adobe Certified Expert — AEM</h3>
                    <p className='about-details'>
                        <ul>Issued : Aug 2025</ul>
                        <ul>Check Out{' '}
                            <a className='about-link-element' href='https://certification.adobe.com/credential/verify/fe39566d-7a2b-11f0-8ca0-42010a400fd3/email' target="_blank" rel="noreferrer">
                                Verification Link
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
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>   
        </div>
    )
}

export default About;