import React from 'react';
import PropTypes from 'prop-types';

MenuLeft.propTypes = {
    menuLeft: PropTypes.array,
};

MenuLeft.defaultProps = {
    menuLeft: [],
}

function MenuLeft(props) {
    const baseUrl = 'https://www.amurelle.com';
    const menuLeft = [
        {
            href: '/collections/all-items',
            title: 'BED SHEETS'
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
        }
    ];

    return (
        <ul className="HorizontalList HorizontalList--spacingExtraLoose">
            {menuLeft.map(item => (
                <li key={item.index} className="HorizontalList__Item">
                    <a href={baseUrl + item.href} className="Heading u-h6">{item.title}</a>
                </li>
            ))}   
        </ul>
    );
}

export default MenuLeft;