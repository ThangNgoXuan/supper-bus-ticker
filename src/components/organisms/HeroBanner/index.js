import React from "react";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input"
import Button from "../../atoms/Button";

export default function HeroBanner() {
  return (
    <div className="o-heroBanner">
      <div className="o-heroBanner_content">
        <Text modifiers={["white", "600", "32x48"]}>Tiềm kiếm vé xe với BusTicket</Text>
        <div className="o-heroBanner_search">
          <Input/>
          <Input/>
          <Button><Text modifiers={["uppercase"]}>Tìm kiếm</Text></Button>
        </div>
      </div>
    </div>
  );
}
