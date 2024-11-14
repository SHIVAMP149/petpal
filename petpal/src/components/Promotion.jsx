import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Promotion.css';
import { FaStethoscope, FaGift, FaTruck, FaPaw, FaHeartbeat, FaAppleAlt } from 'react-icons/fa';

// Carousel settings
const carouselSettings = {
    infinite: false,  // Disable infinite scrolling
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,  // Hide navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false  // Ensure it stops after all items are shown
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false  // Ensure it stops after all items are shown
        }
      }
    ]
  };


const Promotion = () => {
  return (
    <div className="promotion-container">
      {/* Vet Care Section */}
      <div className="vet-care-container">
        <div className="vet-care-content">
          <h2>Instant & Complete Vet Care</h2>
          <p className="subtitle">Wherever you are</p>
          <p className="price">At Only ₹299</p>
          <p className="description">Get end-to-end support with our vets</p>
          <button className="consult-btn">Consult Now</button>
        </div>
        <div className="vet-care-image">
          <img src="VetCare.webp" alt="Vet Care" />
        </div>
      </div>

      {/* Expert Vets Carousel */}
      <div className="expert-vets">
        <h3>Access our expert vets from anywhere</h3>
        <Slider {...carouselSettings}>
          <div className="vet-card">
            <img src="VetProfile.png" alt="Dr. Shantanu Kalambi" className="vet-image"/>
            <h4>Dr. Shantanu Kalambi</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium illum eius repellendus ullam magni, reiciendis iure dignissimos quas sapiente omnis animi vitae vero, deleniti labore beatae quod. Iusto illum odio cumque non atque iure adipisci ducimus praesentium autem alias eos assumenda voluptatem nemo quod nesciunt debitis repellat suscipit, repudiandae dignissimos odit sit quisquam ut! Ducimus adipisci earum voluptatem exercitationem nisi.</p>
          </div>
          <div className="vet-card">
            <img src="VetProfile.png" alt="Dr. Archit" className="vet-image"/>
            <h4>Dr. Archit</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium illum eius repellendus ullam magni, reiciendis iure dignissimos quas sapiente omnis animi vitae vero, deleniti labore beatae quod. Iusto illum odio cumque non atque iure adipisci ducimus praesentium autem alias eos assumenda voluptatem nemo quod nesciunt debitis repellat suscipit, repudiandae dignissimos odit sit quisquam ut! Ducimus adipisci earum voluptatem exercitationem nisi.</p>
          </div>
          <div className="vet-card">
            <img src="VetProfile.png" alt="Dr. Shameeka Rao" className="vet-image"/>
            <h4>Dr. Shameeka Rao</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium illum eius repellendus ullam magni, reiciendis iure dignissimos quas sapiente omnis animi vitae vero, deleniti labore beatae quod. Iusto illum odio cumque non atque iure adipisci ducimus praesentium autem alias eos assumenda voluptatem nemo quod nesciunt debitis repellat suscipit, repudiandae dignissimos odit sit quisquam ut! Ducimus adipisci earum voluptatem exercitationem nisi.</p>
          </div>
          <div className="vet-card">
            <img src="VetProfile.png" alt="Dr. Rohit" className="vet-image"/>
            <h4>Dr. Rohit</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium illum eius repellendus ullam magni, reiciendis iure dignissimos quas sapiente omnis animi vitae vero, deleniti labore beatae quod. Iusto illum odio cumque non atque iure adipisci ducimus praesentium autem alias eos assumenda voluptatem nemo quod nesciunt debitis repellat suscipit, repudiandae dignissimos odit sit quisquam ut! Ducimus adipisci earum voluptatem exercitationem nisi.</p>
          </div>
        </Slider>
      </div>

      {/* Additional Services Section */}
      <div className="additional-services">
        <h3>Why Choose Us?</h3>
        <div className="services-container">
          <div className="service">
            <FaStethoscope className="service-icon" />
            <p>Verified Doctors</p>
          </div>
          <div className="service">
            <FaGift className="service-icon" />
            <p>Free Followup</p>
          </div>
          <div className="service">
            <FaTruck className="service-icon" />
            <p>Medicine Delivery</p>
          </div>
        </div>
      </div>

      {/* Pet Health Tips Section */}
      <div className="pet-health-tips">
        <h3>Pet Health Tips</h3>
        <div className="tips-container">
          <div className="tip">
            <FaPaw className="tip-icon" />
            <p>Regular Checkups</p>
          </div>
          <div className="tip">
            <FaHeartbeat className="tip-icon" />
            <p>Exercise Daily</p>
          </div>
          <div className="tip">
            <FaAppleAlt className="tip-icon" />
            <p>Balanced Nutrition</p>
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img src="Image.png" alt="Healthy Pet" />
        </div>
        <div className="image-description">
          <h3>Healthy Pets, Happy Life</h3>
          <p>Ensure your pet is always healthy and happy with our expert care, advice, and products designed just for them!</p>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
