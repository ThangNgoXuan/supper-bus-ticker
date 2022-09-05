import React from "react";
import Button from "../../../components/atoms/Button";
import Input from "../../../components/atoms/Input";

export default function BookingTicketSchedule() {
  return (
    <div className="p-bookingTicket_schedule">
      <div className="p-bookingTicket_schedule_item">
        <Input label="Điểm đi" placeholder="Nhập điểm đi" />
      </div>
      <div className="p-bookingTicket_schedule_item">
        <Input label="Điểm đến" placeholder="Nhập điểm đi" />
      </div>
      <div className="p-bookingTicket_schedule_item">
        <Input label="Chọn ngày đi" placeholder="Ngày đi" />
      </div>
      <div className="p-bookingTicket_schedule_item">
        <Button label="Tìm chuyến xe">Tìm chuyến xe</Button>
      </div>
    </div>
  );
}
