import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import MenuLeft from './menu/left/left';
import MenuRight from './menu/right/right';

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div id="shopify-section-header" className="shopify-section shopify-section--header">
            <header id="section-header" className="Header Header--initialized Header--withIcons" data-section-id="header" data-section-type="header">
                <div className='Header__Wrapper'>
                    <div className="Header__FlexItem Header__FlexItem--fill">
                        <nav className="Header__MainNav hidden-pocket hidden-lap" aria-label="Main navigation">
                            <MenuLeft />
                        </nav>
                    </div>
                    <div className="Header__FlexItem Header__FlexItem--logo">
                        <Logo />
                    </div>
                    <div className="Header__FlexItem Header__FlexItem--fill">
                        <MenuRight />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Main;