import React from "react";
import InputDate from ".";

export default {
  title: "Component/atoms/InputDate",
  component: InputDate,
  argTypes: {
    label: {
      control: "text",
    },
    error: {
      control: "text",
    },
  },
};

export const Primary = ({ label, error }) => (
  <InputDate
    min="2022-09-06"
    max="2022-12-15"
    value="2022-09-06"
    label={label}
    error={error}
  />
);
