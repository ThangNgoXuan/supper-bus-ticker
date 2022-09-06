import React, { forwardRef } from "react";
import mapModifiers from "../../../utils/functions";
import Text from "../Text";

const InputDateRef = (
  { error, id, label, value, onChange, min, max },
  ref
) => {
  return (
    <div className={mapModifiers("a-inputDate", error && "error")}>
      {label && (
        <div className="a-inputDate_label">
          <label htmlFor={id}>
            <Text
              modifiers={["16x24", error ? "electricCrimson" : "coolBlack"]}
            >
              {label}
            </Text>
          </label>
        </div>
      )}
      <div className="a-inputDate_wrap">
        <input
          ref={ref}
          type="Date"
          value={value}
          className="a-inputDate_inputDate"
          id={id}
          onChange={onChange}
          min={min}
          max={max}
        />
      </div>
      {error && (
        <div className="a-inputDate_messageError">
          <Text modifiers={["electricCrimson", "12x18", "400"]}>{error}</Text>
        </div>
      )}
    </div>
  );
};

const InputDate = forwardRef(InputDateRef);
export default InputDate;
