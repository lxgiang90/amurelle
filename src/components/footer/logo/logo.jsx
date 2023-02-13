import React from 'react';
import PropTypes from 'prop-types';

Logo.propTypes = {

};

function Logo(props) {
    return (
        <a href="/" className="Footer__LogoLink">
            <img className="Footer__LogoImage Footer__LogoImage--primary" src="//cdn.shopify.com/s/files/1/0297/3872/9610/files/LOGO_200x200.png?v=1665764335" alt="Amurelle" />
        </a>
    );
}

export default Logo;