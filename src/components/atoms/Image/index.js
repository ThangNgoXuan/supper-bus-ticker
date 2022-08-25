import PropTypes from 'prop-types';
import React from 'react';
import mapModifiers from '../../../utils/functions';

const Ratio = ['1x1', '4x3', '16x9', '2x1', 'logo', '128x48'];
const SizeImageType = ['cover' | 'contain' | 'inherit'];

export default function Image({ratio, imgSrc, alt, imgType}) {
  return (
    <div className={mapModifiers('a-image', ratio, imgType)}>
        <img src={imgSrc} alt={alt}/>
    </div>
  )
}

Image.prototype = {
    ratio: PropTypes.oneOf(Ratio),
    imgSrc: PropTypes.string,
    alt: PropTypes.string,
    imgType: PropTypes.oneOf(SizeImageType),
}

Image.defaultProps = {
    ratio: '1x1',
    imgSrc: 'https://picsum.photos/500/500',
    alt: 'img-alt',
    imgType: 'cover',
}