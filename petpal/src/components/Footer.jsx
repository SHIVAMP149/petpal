import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = ({ onlineShoppingLinks, exploreLinks, quickLinks, contactInfo, appLinks }) => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="highlight">
                    <img src="./delivery.png" alt="Delivery Icon" />
                    <p>24hr Delivery<br /><span>In 24 cities</span></p>
                </div>
                <div className="highlight">
                    <img src="./child.png" alt="Happy Parents Icon" />
                    <p>1,50,000+<br /><span>Happy pet parents</span></p>
                </div>
                <div className="highlight">
                    <img src="./doctor-patient.png" alt="Vet Consult Icon" />
                    <p>Complimentary vet consult<br /><span>For every new member</span></p>
                </div>
                <div className="highlight">
                    <img src="./drugstore.png" alt="Pharmacy Icon" />
                    <p>Pet Pharmacy<br /><span>Exclusive</span></p>
                </div>
            </div>
            
            <div className="footer-links">
                <div className="footer-column">
                    <h3>ONLINE SHOPPING</h3>
                    {onlineShoppingLinks.map(link => (
                        <a href={link.url} key={link.name}>{link.name}</a>
                    ))}
                </div>
                <div className="footer-column">
                    <h3>EXPLORE</h3>
                    {exploreLinks.map(link => (
                        <a href={link.url} key={link.name}>{link.name}</a>
                    ))}
                </div>
                <div className="footer-column">
                    <h3>QUICK LINKS</h3>
                    {quickLinks.map(link => (
                        <a href={link.url} key={link.name}>{link.name}</a>
                    ))}
                </div>
                <div className="footer-column">
                    <h3>EXPERIENCE OUR APP</h3>
                    <div className="app-links">
                        {appLinks.map(app => (
                            <a href={app.url} key={app.platform}>
                                <img src={app.img} alt={`${app.platform} icon`} />
                            </a>
                        ))}
                    </div>
                    <h3>FOLLOW US</h3>
                    <div className="social-icons">
                        <FaInstagram />
                        <FaFacebook />
                        <FaYoutube />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                    <h3>GET IN TOUCH</h3>
                    <p>{contactInfo.phone}</p>
                    <p>{contactInfo.email}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
