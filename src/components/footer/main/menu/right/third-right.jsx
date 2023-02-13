import React from 'react';
import PropTypes from 'prop-types';

MenuRight.propTypes = {
    menuRight: PropTypes.array,
};


function MenuRight(props) {
    var textHeading = 'our products';
    const menuRight = [
        {
            href: '/pages/our-story-our-mission',
            title: "Product Features"
        },
        {
            href: '/pages/how-its-made-hero-cotton',
            title: "Care Guide"
        },
        {
            href: '/pages/how-its-made-breeze-linen',
            title: "Size Guide"
        },
        {
            href: '/pages/sustainability',
            title: "Digital Gift Cards"
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