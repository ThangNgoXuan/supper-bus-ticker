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
import { Controller, FormProvider, useForm } from "react-hook-form";
import { booking } from "../../utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputDate from "../../components/atoms/InputDate";

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

const listSchema = [
  {
    key: "A0",
    status: true,
  },
  {
    key: "A00",
    status: true,
  },
  {
    key: "A1",
    status: true,
  },
  {
    key: "A2",
    status: true,
  },
  {
    key: "A3",
    status: true,
  },
  {
    key: "A4",
    status: true,
  },
  {
    key: "A5",
    status: true,
  },
  {
    key: "A6",
    status: true,
  },
  {
    key: "A7",
    status: true,
  },
  {
    key: "A8",
    status: true,
  },
  {
    key: "A9",
    status: true,
  },
  {
    key: "A10",
    status: true,
  },
  {
    key: "A11",
    status: true,
  },
  {
    key: "A12",
    status: true,
  },
  {
    key: "A13",
    status: true,
  },
  {
    key: "A14",
    status: true,
  },
  {
    key: "A15",
    status: true,
  },
  {
    key: "A16",
    status: true,
  },
  {
    key: "A17",
    status: true,
  },
  {
    key: "A18",
    status: true,
  },
  {
    key: "A19",
    status: true,
  },
  {
    key: "A20",
    status: true,
  },
  {
    key: "A21",
    status: true,
  },
  {
    key: "A22",
    status: true,
  },
  {
    key: "A23",
    status: true,
  },
];

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
  { id: "1", name: "ghe", value: "Ghế" },
  { id: "2", name: "giuong", value: "Giường" },
  { id: "3", name: "limousine", value: "Limousine" },
];

const priceType = [
  { id: "1", name: "hight to low", value: "Cao đến thấp" },
  { id: "2", name: "low to hight", value: "Thấp đến cao" },
];

export default function BookingTicket() {
  const [indexActive, setIndexActive] = useState(0);
  const [selectPrice, setSelectPrice] = useState();
  const [selectType, setSelectType] = useState();

  // lấy list điểm đi là
  // thêm bảng để search cho nhanh
  // khi tạo điểm đi, thêm  số field dể search
  //vẽ lại ĐB

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

  const method = useForm({
    resolver: yupResolver(booking),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = (data) => {
    console.log(data);
    alert("nhap thanh cong");
    setIndexActive(indexActive + 1);
  };

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
          <TabPanel active={indexActive === 0}>
            <div className="p-bookingTicket_schedule">
              <div className="p-bookingTicket_schedule_item">
                <Input label="Điểm đi" placeholder="Nhập điểm đi" />
              </div>
              <div className="p-bookingTicket_schedule_item">
                <Input label="Điểm đến" placeholder="Nhập điểm đi" />
              </div>
              <div className="p-bookingTicket_schedule_item">
                <InputDate
                  label="Chọn ngày đi"
                  max="2022-12-31"
                  min="2022-09-06"
                />
              </div>
              <div className="p-bookingTicket_schedule_item">
                <Button
                  label="Tìm chuyến xe"
                  handleClick={() => setIndexActive(indexActive + 1)}
                >
                  Tìm chuyến xe
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel active={indexActive === 1}>
            <div className="p-bookingTicket_route">
              <div className="p-bookingTicket_route_pulldown">
                <div className="p-bookingTicket_route_pulldown_item">
                  <Pulldown
                    placeholder="Giá"
                    listData={priceType}
                    value={selectPrice}
                    onSelect={(value) => setSelectPrice(value)}
                  />
                </div>
                <div className="p-bookingTicket_route_pulldown_item">
                  <Pulldown
                    placeholder="Loại xe"
                    listData={typeCoach}
                    value={selectType}
                    onSelect={(valueType) => setSelectType(valueType)}
                  />
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
                                <Text modifiers={["14x18"]}>
                                  {item.remaining}
                                </Text>
                              </div>
                              <div className="p-bookingTicket_item_choose">
                                <Text>Chọn</Text>
                                <input type="checkbox" />
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
                                  <Text modifiers={["coolBlack"]}>
                                    Chưa chọn
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="p-bookingTicket_route_button">
                        <Button
                          handleClick={() => setIndexActive(indexActive - 1)}
                        >
                          Quay lại
                        </Button>
                        <Button
                          handleClick={() => setIndexActive(indexActive + 1)}
                        >
                          Tiếp tục
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
          </TabPanel>
          <TabPanel active={indexActive === 2}>
            <div className="p-bookingTicket_info">
              <div className="p-bookingTicket_info_form">
                <FormProvider {...method}>
                  <form
                    className="p-bookingTicket_form"
                    onSubmit={method.handleSubmit(handleSubmit)}
                    noValidate
                  >
                    <div className="p-bookingTicket_form_field">
                      <Controller
                        name="name"
                        control={method.control}
                        render={({ field, fieldState }) => (
                          <Input
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            label="Họ và tên *"
                          />
                        )}
                      />
                    </div>
                    <div className="p-bookingTicket_form_field">
                      <Controller
                        name="phone"
                        control={method.control}
                        render={({ field, fieldState }) => (
                          <Input
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            label="Số điện thoại *"
                          />
                        )}
                      />
                    </div>
                    <div className="p-bookingTicket_form_field">
                      <Controller
                        name="email"
                        control={method.control}
                        render={({ field, fieldState }) => (
                          <Input
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                            label="Email *"
                          />
                        )}
                      />
                    </div>
                    <div className="p-bookingTicket_form_field p-bookingTicket_form_checkbox">
                      <input type="checkbox" />
                      <Text>Chấp nhận các điều khoản đặt vé của BusTicket</Text>
                    </div>
                    <Button type="submit">Tiếp tục</Button>
                  </form>
                </FormProvider>
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
            </div>
          </TabPanel>
          <TabPanel active={indexActive === 3}>
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

            <div className="p-bookingTicket_item_bookingWrap">
              <div className="p-bookingTicket_item_chairWrap">
                {listSchema.map((item) => (
                  <div
                    className={`p-bookingTicket_item_chairWrap_chair chair ${item.key}`}
                    key={item.key}
                  >
                    <TbArmchair />
                    <Text>{item.key}</Text>
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
          </TabPanel>
        </dib>
      </div>
    </div>
  );
}
