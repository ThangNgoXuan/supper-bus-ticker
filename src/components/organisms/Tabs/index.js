/* eslint-disable */
import React, { useRef, useLayoutEffect } from "react";
import mapModifiers, { handleScrollXCenter } from "../../../utils/functions";
import Text from "../../atoms/Text";

export const TabPanel = ({ children, active, className }) => (
  <div className={mapModifiers("o-tabs_panel", active && "active")}>
    <div className={`o-tabs_panelGroup ${className}`}>{children}</div>
  </div>
);

export const Tab = ({ handleClick, label, active, modifiers, index }) => (
  <div
    onClick={handleClick}
    className={mapModifiers("o-tabs_tab", active ? "active" : "", modifiers)}
  >
    <div className="o-tabs_label">
      <Text
        modifiers={["600", active ? "coolBlack" : "gray", "12x14", "uppercase"]}
        content={label}
      />
    </div>
    <div className="o-tabs_number">
      <Text
        modifiers={["600", active ? "coolBlack" : "gray", "12x14", "uppercase"]}
      >
        {index}
      </Text>
    </div>
  </div>
);

export default function Tabs({
  classTabsActive,
  variableMutate,
  variant,
  children,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    handleScrollXCenter(ref, classTabsActive || ".o-tabs_tab-active");
  }, [variableMutate]);

  return (
    <div className={mapModifiers("o-tabs", variant)}>
      <div ref={ref} className="o-tabs_labels">
        {children}
      </div>
    </div>
  );
}
