import React from 'react';
import PropTypes from 'prop-types';

MenuRight.propTypes = {
    menuRight: PropTypes.array,
};


function MenuRight(props) {
    var textHeading = 'HERE TO HELP';
    const menuRight = [
        {
            href: '/pages/our-story-our-mission',
            title: "Delivery & Returns"
        },
        {
            href: '/pages/how-its-made-hero-cotton',
            title: "FAQs"
        },
        {
            href: '/pages/how-its-made-breeze-linen',
            title: "Privacy Policy"
        },
        {
            href: '/pages/sustainability',
            title: "Terms of Service"
        },
        {
            href: '/blogs/between-the-sheets-amurelle-blog',
            title: "Contact Us - hello@amurelle.com"
        }
    ];

    return (
        <div className='Footer__Block Footer__Block--links'>
            <h2 className='Footer__Title Heading u-h6'>{textHeading}</h2>
            <ul className="Linklist">
                {menuRight.map(item => (
                    <li key={item.index} className="Linklist__Item">
                        <a href={item.href}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuRight;