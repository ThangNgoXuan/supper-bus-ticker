import React from 'react'
import Prototype from 'prop-types'
import mapModifiers from '../../../utils/functions';

const modifiers = ['fullScreen' , 'noPaddingRight' , 'noPaddingLeft']

export default function Container({children, modifiers}) {
  return (
    <div
    className={mapModifiers(
      'o-container',
      modifiers,
    )}
  >
    {children}
  </div>
  )
}

Container.prototype = {
    modifiers: Prototype.oneOf(modifiers),
}