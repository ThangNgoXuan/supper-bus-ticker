import React, { useState } from "react";
import Text from "../../components/atoms/Text";
import Tabs, { Tab, TabPanel } from "../../components/organisms/Tabs";

const dummyData = [
  {
    id: "1",
    label: "Lịch trình",
  },
  {
    id: "2",
    label: "Xác nhận lộ trình",
  },
  {
    id: "3",
    label: "Thông tin khách hàng",
  },
  {
    id: "4",
    label: "Thanh toán",
  },
];

export default function BookingTicket() {
  const [indexActive, setIndexActive] = useState(0);
  return (
    <div className="p-bookingTicket">
      <div className="p-bookingTicket_booking">
        <Text modifiers={["600", "32x48", "coolBlack"]}>
          Đặt vé
        </Text>
      </div>
      <div className="p-bookingTicket_tabs"></div>
      <div className="p-bookingTicket_body">
        <dib>
          <Tabs variableMutate={indexActive}>
            {dummyData.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.label}
                active={index === indexActive}
                handleClick={() => setIndexActive(index)}
                index={index + 1}
              />
            ))}
          </Tabs>
          {dummyData.map((item, index) => (
            <TabPanel
              key={`tab-panel-${index.toString()}`}
              active={index === indexActive}
            >
              {item.label}
            </TabPanel>
          ))}
        </dib>
      </div>
      <div className="p-bookingTicket_detail"></div>
    </div>
  );
}
