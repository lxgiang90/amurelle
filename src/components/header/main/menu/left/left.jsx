import React from 'react';
import PropTypes from 'prop-types';

MenuLeft.propTypes = {
    menuLeft: PropTypes.array,
};

MenuLeft.defaultProps = {
    menuLeft: [],
}

function MenuLeft(props) {
    const menuLeft = [
        {
            href: '/collections/all-items',
            title: 'BEDDING'
        },
        {
            href: '/collections/duvets-pillows',
            title: 'DUVETS & PILLOWS'
        },
        {
            href: '/collections/amurelle-baby',
            title: 'BABY BEDDING'
        },
        {
            href: '/collections/breeze-linen-robes',
            title: 'LINEN ROBES'
        },
        {
            href: '/collections/gifting"',
            title: 'GIFTING'
        }
    ];

    return (
        <ul className="HorizontalList HorizontalList--spacingExtraLoose">
            {menuLeft.map(item => (
                <li key={item.index} className="HorizontalList__Item">
                    <a href={item.href}>{item.title}</a>
                </li>
            ))}   
        </ul>
    );
}

export default MenuLeft;