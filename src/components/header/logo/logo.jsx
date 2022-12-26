import React from 'react';
import PropTypes from 'prop-types';

Logo.propTypes = {
    
};

function Logo(props) {
    return (
        <h1 className="Header__Logo">
            <a href="/" className="Header__LogoLink">
                <img className="Header__LogoImage Header__LogoImage--primary" 
                src="//cdn.shopify.com/s/files/1/0297/3872/9610/files/Amurelle_Black_Web_260x.png?v=1614307756" width="260" alt="Logo Banner | Amurelle" />
            </a>
        </h1>
    );
}

export default Logo;