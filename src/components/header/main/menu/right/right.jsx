import React from 'react';
import PropTypes from 'prop-types';

MenuRight.propTypes = {
    
};

function MenuRight(props) {
    const baseUrl = 'https://www.amurelle.com';
    const menuRight = [
        {
            href: '/pages/our-story-our-mission',
            title: 'OUR STORY'
        },
        {
            href: '/blogs/between-the-sheets-amurelle-blog',
            title: 'BETWEEN THE SHEETS'
        }
    ];

    return (
        <ul className="HorizontalList HorizontalList--spacingExtraLoose">
            {menuRight.map(item => (
                <li key={item.index} className="HorizontalList__Item">
                    <a href={baseUrl + item.href} className="Heading u-h6">{item.title}</a>
                </li>
            ))}   
        </ul>
    );
}

export default MenuRight;