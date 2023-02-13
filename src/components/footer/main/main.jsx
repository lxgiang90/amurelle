import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import TextRight from './content/right/content';
import MenuRight from './menu/right/first-right';
import MenuSecondRight from './menu/right/second-right';
import MenuThirdRight from './menu/right/third-right';
import TextLeft from './content/left/content';

Main.propTypes = {

};

function Main(props) {
    return (
        <div id="shopify-section-footer" className="shopify-section shopify-section--footer">
            <footer id="section-footer" data-section-id="footer" data-section-type="footer" className="Footer  " role="contentinfo">
                <div className="Container">
                    <div className="Footer__Inner">
                        <div className='Footer__Inner--left'>
                            <div className='Footer__Block Footer__Block--newsletter'>
                                <TextLeft />
                            </div>
                        </div>
                        <div className='Footer__Inner--right'>
                            <TextRight />
                            <MenuRight />
                            <MenuSecondRight />
                            <MenuThirdRight />
                        </div>
                    </div>
                    <div className='Footer__Aside'>
                        <div className='Footer__Inner--left'>
                            <Logo />
                        </div>
                        <div className='Footer__Inner--right'>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Main;