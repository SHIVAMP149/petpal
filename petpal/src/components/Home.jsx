import React from 'react'
import Navbar from './Navbar'
import Promotion from './Promotion'
import Footer from './Footer'

export default function Home() {

    const onlineShoppingLinks = [
        { name: 'Dogs', url: '/dogs' },
        { name: 'Cats', url: '/cats' },
        { name: 'Small Pets', url: '/small-pets' },
        { name: 'Consult a Vet', url: '/consult-vet' },
        { name: 'Dog Behaviour', url: '/dog-behaviour' },
        { name: 'Pet Pharmacy', url: '/pet-pharmacy' },
    ];

    const exploreLinks = [
        { name: 'Our Story', url: '/our-story' },
        { name: 'FAQs', url: '/faqs' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact Us', url: '/contact' },
    ];

    const quickLinks = [
        { name: 'My Account', url: '/my-account' },
        { name: 'Track Your Order', url: '/track-order' },
        { name: 'Refund Policy', url: '/refund-policy' },
        { name: 'Return Policy', url: '/return-policy' },
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Terms of Use', url: '/terms-of-use' },
        { name: 'Refer and Save', url: '/refer-save' },
    ];

    const contactInfo = {
        phone: '1800-5723-575',
        email: 'support@supertails.com',
    };

    const appLinks = [
        { platform: 'Google Play', url: 'https://play.google.com/store', img: './google-play.png' },
        { platform: 'App Store', url: 'https://www.apple.com/app-store/', img: 'game.png' },
    ];
  return (
    <div>

        <Navbar/>
        <Promotion />
        <Footer
            onlineShoppingLinks={onlineShoppingLinks}
            exploreLinks={exploreLinks}
            quickLinks={quickLinks}
            contactInfo={contactInfo}
            appLinks={appLinks}
        />

    </div>
  )
}
