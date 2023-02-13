import React from 'react';
import PropTypes from 'prop-types';

MenuRight.propTypes = {
    menuRight: PropTypes.array,
};


function MenuRight(props) {
    var textHeading = 'ABOUT US';
    const menuRight = [
        {
            href: '/pages/our-story-our-mission',
            title: "Our Story"
        },
        {
            href: '/pages/how-its-made-hero-cotton',
            title: "How It's Made: Hero Cotton"
        },
        {
            href: '/pages/how-its-made-breeze-linen',
            title: "How It's Made: Breeze Linen"
        },
        {
            href: '/pages/sustainability',
            title: "Sustainability"
        },
        {
            href: '/blogs/between-the-sheets-amurelle-blog',
            title: "Blogs"
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