/* eslint-disable */
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbArmchair } from "react-icons/tb";
import Button from "../../components/atoms/Button";
import Image from "../../components/atoms/Image";
import Input from "../../components/atoms/Input";
import Text from "../../components/atoms/Text";
import Pulldown from "../../components/molecules/Pulldown";
import Tabs, { Tab, TabPanel } from "../../components/organisms/Tabs";
import momo from "../../assets/images/momo.png";
import vnpay from "../../assets/images/vnpay.png";
import { FormProvider } from "react-hook-form";
import { booking } from "../../utils/schema";

const data = new Array(5).fill({
  timeGo: "08:00",
  timeEnd: "12:00",
  price: "200.000",
  type: "limousine",
  remaining: 32,
});

const listChair = new Array(10).fill({
  div: <TbArmchair />,
});

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

const typeCoach = [
  { id: '1', name: 'ghe', value: 'Ghế'},
  { id: '2', name: 'giuong', value: 'Giường'},
  { id: '3', name: 'limousine', value: 'Limousine'},
];


const priceType = [
  { id: '1', name: 'hight to low', value: 'Cao đến thấp'},
  { id: '2', name: 'low to hight', value: 'Thấp đến cao'},
];

export default function BookingTicket() {
  const [indexActive, setIndexActive] = useState(0);

  const dummyData = [
    {
      id: "1",
      label: "Lịch trình",
      div: (
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
      ),
    },

  /* Xác định lộ trình */
    {
      id: "2",
      label: "Xác nhận lộ trình",
      div: (
        <div className="p-bookingTicket_route">
          <div className="p-bookingTicket_route_pulldown">
            <div className="p-bookingTicket_route_pulldown_item">
              <Pulldown placeholder="Giá" listData={priceType}/>
            </div>
            <div className="p-bookingTicket_route_pulldown_item">
              <Pulldown placeholder="Loại xe" listData={typeCoach}/>
            </div>
          </div>
          {data ? (
            data.length > 0 && (
              <>
                <div className="p-bookingTicket_route_routes">
                  {data.map((item, index) => (
                    <div
                      className="p-bookingTicket_item"
                      key={`item-routes-${index.toString()}`}
                    >
                      <div className="p-bookingTicket_item_header">
                        <div className="p-bookingTicket_item_time">
                          <Text modifiers={["400", "24x34", "jet"]}>
                            {item.timeGo}
                          </Text>{" "}
                          <AiOutlineArrowRight />{" "}
                          <Text modifiers={["400", "24x34", "jet"]}>
                            {item.timeEnd}
                          </Text>
                        </div>
                        <div className="p-bookingTicket_item_typeWrap">
                          <div className="p-bookingTicket_item_type">
                            <Text modifiers={["14x18"]}>{item.price}</Text>
                            <Text modifiers={["14x18"]}>{item.type}</Text>
                            <Text modifiers={["14x18"]}>{item.remaining}</Text>
                          </div>
                          <div className="p-bookingTicket_item_choose">
                            <Text>Chọn</Text>
                            <input type="radio" />
                          </div>
                        </div>
                        <div className="p-bookingTicket_item_bookingWrap">
                          <div className="p-bookingTicket_item_chairWrap">
                            {listChair.map((item, index) => (
                              <div className="p-bookingTicket_item_chairWrap_chair">
                                {item.div}
                                <Text>{index}</Text>
                              </div>
                            ))}
                          </div>
                          <div className="p-bookingTicket_item_statusWrap">
                            <div className="p-bookingTicket_item_seleted">
                              <div />
                              <Text>Đã chọn</Text>
                            </div>
                            <div className="p-bookingTicket_item_seleted p-bookingTicket_item_notyet">
                              <div />
                              <Text modifiers={["coolBlack"]}>Chưa chọn</Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-bookingTicket_route_button">
                    <Button handleClick={() => setIndexActive(indexActive - 1)}>
                      Quay lại
                    </Button>
                    <Button handleClick={() => setIndexActive(indexActive + 1)}>
                      Phía trước
                    </Button>
                  </div>
                </div>
              </>
            )
          ) : (
            <div className="p-bookingTicket_route_routes">
              <Text>Không tìm thấy thông tin chuyến xe</Text>
              <div className="p-bookingTicket_route_button">
                <Button handleClick={() => setIndexActive(indexActive - 1)}>
                  Quay lại
                </Button>
              </div>
            </div>
          )}
        </div>
      ),
    },

/* Thong tin khách hàng */

    {
      id: "3",
      label: "Thông tin khách hàng",
      div: (
        <>
          <div className="p-bookingTicket_info">
            <div className="p-bookingTicket_info_form">
              <form className="p-bookingTicket_form">
                <div className="p-bookingTicket_form_field">
                  <Input label="Họ và tên *" />
                </div>
                <div className="p-bookingTicket_form_field">
                  <Input label="Số điện thoại *" />
                </div>
                <div className="p-bookingTicket_form_field">
                  <Input label="Email *" />
                </div>
                <div className="p-bookingTicket_form_field">
                  <input type="checkbox" />
                  <Text>Chấp nhận các điều khoản đặt vé của BusTicket</Text>
                </div>
              </form>
            </div>
            <div className="p-bookingTicket_info_rules">
              <Text modifiers={["center", "coolBlack", "600", "uppercase"]}>
                Điều khoản & Lưu ý
              </Text>
              <ul className="p-bookingTicket_info_rules_ul">
                <li className="p-bookingTicket_info_rules_li">
                  <Text>
                    (*) Quý khách vui lòng mang email có chứa mã vé đến văn
                    phòng để đổi vé lên xe trước giờ xuất bến ít nhất
                  </Text>
                </li>
                <li className="p-bookingTicket_info_rules_li">
                  <Text>
                    (*) Quý khách vui lòng mang email có chứa mã vé đến văn
                    phòng để đổi vé lên xe trước giờ xuất bến ít nhất
                  </Text>
                </li>
                <li className="p-bookingTicket_info_rules_li">
                  <Text>
                    (*) Quý khách vui lòng mang email có chứa mã vé đến văn
                    phòng để đổi vé lên xe trước giờ xuất bến ít nhất
                  </Text>
                </li>
                <li className="p-bookingTicket_info_rules_li">
                  <Text>
                    (*) Quý khách vui lòng mang email có chứa mã vé đến văn
                    phòng để đổi vé lên xe trước giờ xuất bến ít nhất
                  </Text>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-bookingTicket_route_button">
            <Button handleClick={() => setIndexActive(indexActive - 1)}>
              Quay lại
            </Button>
            <Button handleClick={() => setIndexActive(indexActive + 1)}>
              Phía trước
            </Button>
          </div>
        </>
      ),
    },

    /* Thanh toán */
    {
      id: "4",
      label: "Thanh toán",
      div: (
        <>
          <div className="p-bookingTicket_payment">
            <Text modifiers={["uppercase", "white"]}>Thông tin mua vé</Text>
            <div className="p-bookingTicket_payment_info">
              <Text>Thông tin hành khách</Text>
              <div className="p-bookingTicket_payment_info_body">
                <Text modifiers={["400"]}>Họ và Tên: {ticketInfo.name}</Text>
                <Text modifiers={["400"]}>
                  Số điện thoại: {ticketInfo.phone}
                </Text>
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
      ),
    },
  ];

  return (
    <div className="p-bookingTicket">
      <div className="p-bookingTicket_booking">
        <Text modifiers={["600", "32x48", "coolBlack"]}>Đặt vé</Text>
      </div>
      <div className="p-bookingTicket_body">
        <dib className="p-bookingTicket_tabWrap">
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
              {item.div}
            </TabPanel>
          ))}
        </dib>
      </div>
      <div className="p-bookingTicket_detail"></div>
    </div>
  );
}
