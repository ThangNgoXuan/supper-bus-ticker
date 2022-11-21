import React, { useState } from "react";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HeroBanner() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="o-heroBanner">
      <div className="o-heroBanner_content">
        <Text modifiers={["white", "600", "32x48"]}>
          Tiềm kiếm vé xe với BusTicket
        </Text>
        <div className="o-heroBanner_search">
          <Input />
          <Input />
          <div>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <Button>
            <Text modifiers={["uppercase"]}>Tìm kiếm</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
