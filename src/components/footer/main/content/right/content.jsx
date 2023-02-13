import React from 'react';
import PropTypes from 'prop-types';

TextRight.propTypes = {
    textRight: PropTypes.array,
};

TextRight.defaultProps = {
    textRight: [],
}

function TextRight(props) {
    var textHeading = 'Simply Bedding, Made Better';
    const textRight = [
        {
            text: 'Beautiful Bedding Sets Made in Portugal From 100% French Flax Linen & 100% Super soft Cotton. Enjoy Free Shipping Ireland Wide & No Taxes or Duties on UK/International Orders. '
        },
        {
            text: "Let's Sleep Sounder!"
        }
    ];

    return (
        <div className='Footer__Block Footer__Block--text'>
            <h2 className='Footer__Title Heading u-h6'>{textHeading}</h2>
            <div className="Footer__Content Rte">
                {textRight.map(item => (
                    <p>{item.text}</p>
                ))}
            </div>
        </div>
    );
}

export default TextRight;