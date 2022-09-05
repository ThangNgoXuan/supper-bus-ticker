import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import mapModifiers from "../../../utils/functions";
import Text from "../Text";

const Type = ["email", "text", "number", "password"];

const InputRef = (
  { error, type, placeholder, id, label, value, modifiers, onChange },
  ref
) => {
  return (
    <div className={mapModifiers("a-input", modifiers, error && "error")}>
      {label && (
        <div className="a-input_label">
          <label htmlFor={id}>
            <Text
              modifiers={["16x24", error ? "electricCrimson" : "coolBlack"]}
            >
              {label}
            </Text>
          </label>
        </div>
      )}
      <div className="a-input_wrap">
        <input
          ref={ref}
          type={type}
          value={value}
          placeholder={placeholder}
          className="a-input_input"
          id={id}
          onChange={onChange}
        />
      </div>
      {error && (
        <div className="a-input_messageError">
          <Text modifiers={["electricCrimson", "12x18", "400"]}>{error}</Text>
        </div>
      )}
    </div>
  );
};

const Input = forwardRef(InputRef);
export default Input;

Input.prototype = {
  placeholder: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOfType(Type),
};

Input.defaultProps = {
  type: "text",
  placeholder: "placeholder",
};
