import React from 'react';
import PropTypes from 'prop-types';

TextLeft.propTypes = {
    textLeft: PropTypes.array,
};

TextLeft.defaultProps = {
    textLeft: [],
}

function TextLeft(props) {
    var textHeading = 'Join our community and receive €10 off your first order plus exclusive offers in future';
    return (
        <div className='Footer__Content Rte'>
            <p>{textHeading}</p>
        </div>
    );
}

export default TextLeft;