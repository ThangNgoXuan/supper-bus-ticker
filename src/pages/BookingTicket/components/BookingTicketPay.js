import React from "react";
import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import Image from "../../components/atoms/Image";
import momo from "../../assets/images/momo.png";
import vnpay from "../../assets/images/vnpay.png";

const ticketInfo = {
  name: "Ngô Xuân Thắng",
  phone: "0337930954",
  email: "thangnx.it@gmail.com",
  router: "Bình Dương => Bình Định",
  time: "08:00 05/09/2022",
  chair: "A102",
  totalChair: 1,
  place: "Cầu vượt linh xuân",
  totalPrice: "250.00",
};

export default function BookingTicketPay() {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <>
      <div className="p-bookingTicket_payment">
        <Text modifiers={["uppercase", "white"]}>Thông tin mua vé</Text>
        <div className="p-bookingTicket_payment_info">
          <Text>Thông tin hành khách</Text>
          <div className="p-bookingTicket_payment_info_body">
            <Text modifiers={["400"]}>Họ và Tên: {ticketInfo.name}</Text>
            <Text modifiers={["400"]}>Số điện thoại: {ticketInfo.phone}</Text>
            <Text modifiers={["400"]}>Email: {ticketInfo.email}</Text>
          </div>
        </div>
        <div className="p-bookingTicket_payment_chair">
          <Text>Thông tin tuyến: {ticketInfo.router}</Text>
          <div className="p-bookingTicket_payment_info_body">
            <Text modifiers={["400"]}>Tuyến xe: {ticketInfo.router}</Text>
            <Text modifiers={["400"]}>Thời gian: {ticketInfo.time}</Text>
            <Text modifiers={["400"]}>
              Số lượng ghế: {ticketInfo.totalChair}
            </Text>
            <Text modifiers={["400"]}>Ghế: {ticketInfo.chair}</Text>
            <Text modifiers={["400"]}>Điểm đón: {ticketInfo.place}</Text>
          </div>
        </div>
        <Text modifiers={["uppercase", "white", "right"]}>
          Tổng thanh toán: {ticketInfo.totalPrice} VNĐ
        </Text>
      </div>
      <Text modifiers={["uppercase", "600", "coolBlack", "center"]}>
        Chọn cách thanh toán
      </Text>
      <div className="p-bookingTicket_payment_type">
        <div className="p-bookingTicket_payment_type_item">
          <Image imgSrc={momo} />
          <Text>Ví MoMo</Text>
        </div>
        <div className="p-bookingTicket_payment_type_item">
          <Image imgSrc={vnpay} />
          <Text>VNPay</Text>
        </div>
      </div>
      <div className="p-bookingTicket_route_button">
        <Button handleClick={() => setIndexActive(indexActive - 1)}>
          Quay lại
        </Button>
      </div>
    </>
  );
}
