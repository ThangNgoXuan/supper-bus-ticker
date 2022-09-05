import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import mapModifiers from "../../../utils/functions";
import Text from "../Text";

const TextAreaRef = (
  { error, placeholder, name, value, rows, onChange },
  ref
) => {
  return (
    <div className="a-textArea_wrap">
      <textarea
        className={mapModifiers("a-textArea", error && "error")}
        ref={ref}
        placeholder={placeholder}
        value={value}
        rows={rows}
        name={name}
        onChange={onChange}
      />

      {error && (
        <div className="a-textArea_messageError">
          <Text modifiers={["electricCrimson", "12x18", "400"]}>{error}</Text>
        </div>
      )}
    </div>
  );
};

const TextArea = forwardRef(TextAreaRef);
export default TextArea;

TextArea.prototype = {
  placeholder: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
};

TextArea.defaultProps = {
  type: "text",
  placeholder: "placeholder",
};
