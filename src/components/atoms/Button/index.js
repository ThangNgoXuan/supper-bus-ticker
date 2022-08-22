import React from "react";
import PropTypes from 'prop-types';
import mapModifiers from "../../../utils/functions";

const Size = ['xs' | 'lg'];
const Variant = ['primary', 'secondary'];
const Type = ['button', 'submit'];

const Button = ({children, modifies, disabled, type, handleClick}) => {
    return (
        <button type={type} className={mapModifiers('a-button', modifies, disabled && 'disabled')} handleClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;

Button.prototype = {
    type: PropTypes.oneOfType(Type),
    modifies: [Size, Variant],
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
    children: PropTypes.string,
}

Button.defaultProps = {
    type: 'button',
    disabled: false,
    children: 'button',
}