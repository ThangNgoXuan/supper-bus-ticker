import React from "react";
import PropTypes from 'prop-types';
import Text from "../Text";
import mapModifiers from "../../../utils/functions";

const Size = ['xs' | 'lg'];
const Variant = ['primary', 'secondary'];
const Type = ['button', 'submit'];

const Button = ({children, modifies, disabled, type, handleClick, label}) => {
    return (
        <>
        {label && (
            <div className="a-button_label">
            <label>
              <Text
                modifiers={["16x24", "coolBlack"]}
              >
                {label}
              </Text>
            </label>
          </div>
        )}
        <button type={type} className={mapModifiers('a-button', modifies, disabled && 'disabled')} onClick={handleClick}>
            {children}
        </button>
        </>
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