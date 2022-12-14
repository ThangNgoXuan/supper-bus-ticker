/* eslint-disable */
import React, { useEffect, useState } from "react";
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
import tripApi from "../../api/tripApi";
import useFetch from "../../hooks/useFetch";
import moment from "moment";

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
  name: "Ng?? Xu??n Th???ng",
  phone: "0337930954",
  email: "thangnx.it@gmail.com",
  router: "B??nh D????ng => B??nh ?????nh",
  time: "08:00 05/09/2022",
  chair: "A102",
  totalChair: 1,
  place: "C???u v?????t linh xu??n",
  totalPrice: "250.00",
};

const typeCoach = [
  { id: "1", name: "ghe", value: "Gh???" },
  { id: "2", name: "giuong", value: "Gi?????ng" },
  { id: "3", name: "limousine", value: "Limousine" },
];

const priceType = [
  { id: "1", name: "hight to low", value: "Cao ?????n th???p" },
  { id: "2", name: "low to hight", value: "Th???p ?????n cao" },
];

export default function BookingTicket() {
  const [indexActive, setIndexActive] = useState(0);
  const [selectPrice, setSelectPrice] = useState();
  const [selectType, setSelectType] = useState();

  const [loadingTrip, dataTrip, _Trip, fetchTrip, refetchTrip] = useFetch(
    { status: true },
    tripApi.getAllTrip
  );

  useEffect(() => {
    fetchTrip({}, true);
    /*eslint-disable-next-line */
  }, []);

  // l???y list ??i???m ??i l??
  // th??m b???ng ????? search cho nhanh
  // khi t???o ??i???m ??i, th??m  s??? field d??? search
  //v??? l???i ??B

  const dummyData = [
    {
      id: "1",
      label: "L???ch tr??nh",
    },
    {
      id: "2",
      label: "X??c nh???n l??? tr??nh",
    },
    {
      id: "3",
      label: "Th??ng tin kh??ch h??ng",
    },
    {
      id: "4",
      label: "Thanh to??n",
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
        <Text modifiers={["600", "32x48", "coolBlack"]}>?????t v??</Text>
      </div>
      <div className="p-bookingTicket_body">
        <div className="p-bookingTicket_tabWrap">
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
                <Input label="??i???m ??i" placeholder="Nh???p ??i???m ??i" />
              </div>
              <div className="p-bookingTicket_schedule_item">
                <Input label="??i???m ?????n" placeholder="Nh???p ??i???m ??i" />
              </div>
              <div className="p-bookingTicket_schedule_item">
                <InputDate
                  label="Ch???n ng??y ??i"
                  max="2022-12-31"
                  min="2022-09-06"
                />
              </div>
              <div className="p-bookingTicket_schedule_item">
                <Button
                  label="T??m chuy???n xe"
                  handleClick={() => setIndexActive(indexActive + 1)}
                >
                  T??m chuy???n xe
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel active={indexActive === 1}>
            <div className="p-bookingTicket_route">
              <div className="p-bookingTicket_route_pulldown">
                <div className="p-bookingTicket_route_pulldown_item">
                  <Pulldown
                    placeholder="Gi??"
                    listData={priceType}
                    value={selectPrice}
                    onSelect={(value) => setSelectPrice(value)}
                  />
                </div>
                <div className="p-bookingTicket_route_pulldown_item">
                  <Pulldown
                    placeholder="Lo???i xe"
                    listData={typeCoach}
                    value={selectType}
                    onSelect={(valueType) => setSelectType(valueType)}
                  />
                </div>
              </div>
              {dataTrip ? (
                dataTrip.length > 0 && (
                  <>
                    <div className="p-bookingTicket_route_routes">
                      {dataTrip.map((item, index) => (
                        <div
                          className="p-bookingTicket_item"
                          key={`item-routes-${index.toString()}`}
                        >
                          <div className="p-bookingTicket_item_header">
                            <div className="p-bookingTicket_item_time">
                              <Text modifiers={["400", "24x34", "jet"]}>
                                {moment(item?.start?.intend_time).format(
                                  "HH:mm"
                                )}
                              </Text>
                              <AiOutlineArrowRight />{" "}
                              <Text modifiers={["400", "24x34", "jet"]}>
                                {moment(item?.end?.intend_time).format("HH:mm")}
                              </Text>
                            </div>
                            <div className="p-bookingTicket_item_typeWrap">
                              <div className="p-bookingTicket_item_type">
                                <Text modifiers={["14x18"]}>
                                  {item?.price} VN??
                                </Text>
                                <Text modifiers={["14x18"]}>
                                  {item?.seat_diagram[0]?.name}
                                </Text>
                                <Text modifiers={["14x18"]}>
                                  {/* {item?.remaining} */}
                                </Text>
                              </div>
                              <div className="p-bookingTicket_item_choose">
                                {/* <Text>Ch???n</Text>
                                <input type="checkbox" /> */}
                              </div>
                            </div>
                            <div className="p-bookingTicket_item_bookingWrap">
                              <div className="p-bookingTicket_item_chairWrap">
                                {item?.seat_diagram[0]?.type == "bunk" && (
                                  <div className="p-bookingTicket_bunk">
                                    <div className="p-bookingTicket_bunk_floor1">
                                      <div className="A0"/>
                                      <div className="A000"/>
                                      <div className="A00"/>
                                      {item?.seat_diagram[0]?.schema?.floor1?.map(
                                        (ele) => (
                                          <div
                                            className={`p-bookingTicket_chair ${ele?.name}  p-bookingTicket_${ele?.status}`}
                                            key={`${item?._id.toString()}-floot1-${ele?.name.toString()}`}
                                          >
                                            <TbArmchair />
                                            <Text modifiers={['500',]}>{ele?.name}</Text>
                                          </div>
                                        )
                                      )}
                                    </div>
                                    <div className="p-bookingTicket_bunk_floor2">
                                    <div className="A0"/>
                                      <div className="A000"/>
                                      <div className="A00"/>
                                      {item?.seat_diagram[0]?.schema?.floor2?.map(
                                        (ele) => (
                                          <div
                                            className={`p-bookingTicket_chair ${ele?.name}  p-bookingTicket_${ele?.status}`}
                                            key={`${item?._id.toString()}-floot2-${ele?.name.toString()}`}
                                          >
                                            <TbArmchair />
                                            <Text modifiers={['500',]}>{ele?.name}</Text>
                                          </div>
                                        )
                                      )}
                                    </div>
                                    {/* <div className="p-bookingTicket_bunk_floor2">
                                      <div className="B0"/>
                                      <div className="B00"/>
                                      {item?.seat_diagram[0]?.schema?.floor2?.map(
                                        (ele) => (
                                          <div
                                            className={`p-bookingTicket_chair ${ele?.name}  p-bookingTicket_${ele?.status}`}
                                            key={`${item?._id.toString()}-floot1-${ele?.name.toString()}`}
                                          >
                                            <TbArmchair />
                                            <Text modifiers={['500',]}>{ele?.name}</Text>
                                          </div>
                                        )
                                      )}
                                    </div> */}

                                  </div>
                                )}
                              </div>
                              <div className="p-bookingTicket_item_statusWrap">
                                <div className="p-bookingTicket_item_seleted">
                                  <div />
                                  <Text>???? ch???n</Text>
                                </div>
                                <div className="p-bookingTicket_item_seleted p-bookingTicket_item_notyet">
                                  <div />
                                  <Text modifiers={["coolBlack"]}>
                                    Ch??a ch???n
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
                          Quay l???i
                        </Button>
                        <Button
                          handleClick={() => setIndexActive(indexActive + 1)}
                        >
                          Ti???p t???c
                        </Button>
                      </div>
                    </div>
                  </>
                )
              ) : (
                <div className="p-bookingTicket_route_routes">
                  <Text>Kh??ng t??m th???y th??ng tin chuy???n xe</Text>
                  <div className="p-bookingTicket_route_button">
                    <Button handleClick={() => setIndexActive(indexActive - 1)}>
                      Quay l???i
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
                            label="H??? v?? t??n *"
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
                            label="S??? ??i???n tho???i *"
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
                      <Text>Ch???p nh???n c??c ??i???u kho???n ?????t v?? c???a BusTicket</Text>
                    </div>
                    <Button type="submit">Ti???p t???c</Button>
                  </form>
                </FormProvider>
              </div>
              <div className="p-bookingTicket_info_rules">
                <Text modifiers={["center", "coolBlack", "600", "uppercase"]}>
                  ??i???u kho???n & L??u ??
                </Text>
                <ul className="p-bookingTicket_info_rules_ul">
                  <li className="p-bookingTicket_info_rules_li">
                    <Text>
                      (*) Qu?? kh??ch vui l??ng mang email c?? ch???a m?? v?? ?????n v??n
                      ph??ng ????? ?????i v?? l??n xe tr?????c gi??? xu???t b???n ??t nh???t
                    </Text>
                  </li>
                  <li className="p-bookingTicket_info_rules_li">
                    <Text>
                      (*) Qu?? kh??ch vui l??ng mang email c?? ch???a m?? v?? ?????n v??n
                      ph??ng ????? ?????i v?? l??n xe tr?????c gi??? xu???t b???n ??t nh???t
                    </Text>
                  </li>
                  <li className="p-bookingTicket_info_rules_li">
                    <Text>
                      (*) Qu?? kh??ch vui l??ng mang email c?? ch???a m?? v?? ?????n v??n
                      ph??ng ????? ?????i v?? l??n xe tr?????c gi??? xu???t b???n ??t nh???t
                    </Text>
                  </li>
                  <li className="p-bookingTicket_info_rules_li">
                    <Text>
                      (*) Qu?? kh??ch vui l??ng mang email c?? ch???a m?? v?? ?????n v??n
                      ph??ng ????? ?????i v?? l??n xe tr?????c gi??? xu???t b???n ??t nh???t
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-bookingTicket_route_button">
              <Button handleClick={() => setIndexActive(indexActive - 1)}>
                Quay l???i
              </Button>
            </div>
          </TabPanel>
          <TabPanel active={indexActive === 3}>
            <div className="p-bookingTicket_payment">
              <Text modifiers={["uppercase", "white"]}>Th??ng tin mua v??</Text>
              <div className="p-bookingTicket_payment_info">
                <Text>Th??ng tin h??nh kh??ch</Text>
                <div className="p-bookingTicket_payment_info_body">
                  <Text modifiers={["400"]}>H??? v?? T??n: {ticketInfo.name}</Text>
                  <Text modifiers={["400"]}>
                    S??? ??i???n tho???i: {ticketInfo.phone}
                  </Text>
                  <Text modifiers={["400"]}>Email: {ticketInfo.email}</Text>
                </div>
              </div>
              <div className="p-bookingTicket_payment_chair">
                <Text>Th??ng tin tuy???n: {ticketInfo.router}</Text>
                <div className="p-bookingTicket_payment_info_body">
                  <Text modifiers={["400"]}>Tuy???n xe: {ticketInfo.router}</Text>
                  <Text modifiers={["400"]}>Th???i gian: {ticketInfo.time}</Text>
                  <Text modifiers={["400"]}>
                    S??? l?????ng gh???: {ticketInfo.totalChair}
                  </Text>
                  <Text modifiers={["400"]}>Gh???: {ticketInfo.chair}</Text>
                  <Text modifiers={["400"]}>??i???m ????n: {ticketInfo.place}</Text>
                </div>
              </div>
              <Text modifiers={["uppercase", "white", "right"]}>
                T???ng thanh to??n: {ticketInfo.totalPrice} VN??
              </Text>
            </div>
            <Text modifiers={["uppercase", "600", "coolBlack", "center"]}>
              Ch???n c??ch thanh to??n
            </Text>
            <div className="p-bookingTicket_payment_type">
              <div className="p-bookingTicket_payment_type_item">
                <Image imgSrc={momo} />
                <Text>V?? MoMo</Text>
              </div>
              <div className="p-bookingTicket_payment_type_item">
                <Image imgSrc={vnpay} />
                <Text>VNPay</Text>
              </div>
            </div>
            <div className="p-bookingTicket_route_button">
              <Button handleClick={() => setIndexActive(indexActive - 1)}>
                Quay l???i
              </Button>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
