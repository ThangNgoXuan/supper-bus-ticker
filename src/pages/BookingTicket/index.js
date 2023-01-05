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
import { useSearchParams } from "react-router-dom";
import useValues from "../../hooks/useValues";
import HeroBanner from "../../components/organisms/HeroBanner";
import routesApi from "../../api/routesApi";

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

const placeholder = {
  name: "Nhập họ và tên",
  phone: "Nhập số điện thoại",
  email: "Nhập email",
};

const typeCoach = [
  { id: "1", name: "l_seat_11", value: "Ghế" },
  { id: "2", name: "n_bunk_34", value: "Giường" },
];

const priceType = [
  { id: "1", name: "hight to low", value: "Cao đến thấp" },
  { id: "2", name: "low to hight", value: "Thấp đến cao" },
];

export default function BookingTicket() {
  const [indexActive, setIndexActive] = useState(0);
  const [selectPrice, setSelectPrice] = useState();

  const [selectType, setSelectType] = useState(typeCoach[0]);
  let [searchParams] = useSearchParams();
  const [values, setValues] = useValues({
    dateUrl: searchParams.get("date"),
    idRoute: searchParams.get("route"),
    dataFindTrip: [],
    indexActive: 0,
    selectPrice: "",
    selectType: "",
    data: {},
    dataFindRoute: {},
    detailTrip: [],
  });

  const [loadingTrip, dataTrip, _Trip, fetchTrip, refetchTrip] = useFetch(
    { status: true },
    tripApi.getAllTrip
  );

  useEffect(() => {
    fetchTrip({}, true);
    routesApi
      .findRouteById(values.idRoute)
      .then((res) => {
        setValues({
          dataFindRoute: res?.data,
        });
      })
      .catch((err) => console.log(err));

    if (values.dateUrl && values.dateUrl.toString() !== "2022-10-10") {
      setValues({
        indexActive: 1,
      });
      tripApi
        .findTrip(values.dateUrl, values.idRoute)
        .then((res) => {
          if (res?.status) {
            setValues({
              dataFindTrip: res?.data,
            });
          }
        })
        .catch((err) => console.log("err", err));
    } else {
      setValues({
        indexActive: 0,
      });
    }
  }, [values.dateUrl]);

  console.log("data", values.dataFindRoute);

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
    setValues({
      indexActive: values.indexActive + 1,
    });
  };

  return (
    <div className="p-bookingTicket">
      <div className="p-bookingTicket_booking">
        <Text modifiers={["600", "32x48", "coolBlack"]}>Đặt vé</Text>
      </div>
      <div className="p-bookingTicket_body">
        <div className="p-bookingTicket_tabWrap">
          <Tabs variableMutate={values.indexActive}>
            {dummyData.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.label}
                active={index === values.indexActive}
                handleClick={() =>
                  setValues({
                    indexActive: index,
                  })
                }
                index={index + 1}
              />
            ))}
          </Tabs>
          <TabPanel active={values.indexActive === 0}>
            <HeroBanner data={values.dataFindRoute} />
                {values.dataFindRoute &&<>
            <Text>Chi tiết chuyến đi</Text>
            {values.dataFindRoute?.points?.map((ele) => {
              <Text>{ele?._id}</Text>
            })}
                </>
                }
          </TabPanel>
          <TabPanel active={values.indexActive === 1}>
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
                    // defaultValues={selectType[0]}
                    onSelect={(valueType) => setSelectType(valueType)}
                  />
                </div>
              </div>
              {values.dataFindTrip && values.dataFindTrip?.length > 0 ? (
                <>
                  <div className="p-bookingTicket_route_routes">
                    {values.dataFindTrip.map((item, index) => (
                      <div
                        className="p-bookingTicket_item"
                        key={`item-routes-${index.toString()}`}
                      >
                        <div className="p-bookingTicket_item_header">
                          <div className="p-bookingTicket_item_time">
                            <Text modifiers={["400", "24x34", "jet"]}>
                              {moment(item?.start?.intend_time).format("HH:mm")}
                            </Text>
                            <AiOutlineArrowRight />{" "}
                            <Text modifiers={["400", "24x34", "jet"]}>
                              {moment(item?.end?.intend_time).format("HH:mm")}
                            </Text>
                          </div>
                          <div className="p-bookingTicket_item_typeWrap">
                            <div className="p-bookingTicket_item_type">
                              <Text modifiers={["14x18"]}>
                                {item?.price} VNĐ
                              </Text>
                              <Text modifiers={["14x18"]}>
                                {item?.seat_diagram?.[0]?.name}
                              </Text>
                              <Text modifiers={["14x18"]}>
                                {/* {item?.remaining} */}
                              </Text>
                            </div>
                            <div className="p-bookingTicket_item_choose">
                              <Text>Chọn</Text>
                              <input type="checkbox" />
                            </div>
                          </div>
                          <div className="p-bookingTicket_item_bookingWrap">
                            <div className="p-bookingTicket_item_chairWrap">
                              {item?.seat_diagram?.[0]?.type == "bunk" && (
                                <div className="p-bookingTicket_bunk">
                                  <div className="p-bookingTicket_bunk_floor1">
                                    <div className="A0" />
                                    <div className="A000" />
                                    <div className="A00" />
                                    {item?.seat_diagram?.[0]?.schema?.floor1?.map(
                                      (ele) => (
                                        <div
                                          className={`p-bookingTicket_chair ${ele?.name}  p-bookingTicket_${ele?.status}`}
                                          key={`${item?._id.toString()}-floot1-${ele?.name.toString()}`}
                                        >
                                          <TbArmchair />
                                          <Text modifiers={["500"]}>
                                            {ele?.name}
                                          </Text>
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="p-bookingTicket_bunk_floor2">
                                    <div className="A0" />
                                    <div className="A000" />
                                    <div className="A00" />
                                    {item?.seat_diagram?.[0]?.schema?.floor2?.map(
                                      (ele) => (
                                        <div
                                          className={`p-bookingTicket_chair ${ele?.name}  p-bookingTicket_${ele?.status}`}
                                          key={`${item?._id.toString()}-floot2-${ele?.name.toString()}`}
                                        >
                                          <TbArmchair />
                                          <Text modifiers={["500"]}>
                                            {ele?.name}
                                          </Text>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
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
                      <Button
                        handleClick={() =>
                          setValues({
                            indexActive: values.indexActive - 1,
                          })
                        }
                      >
                        Quay lại
                      </Button>
                      <Button
                        handleClick={() =>
                          setValues({
                            indexActive: values.indexActive + 1,
                          })
                        }
                      >
                        Tiếp tục
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-bookingTicket_route_routes">
                  <Text>Không tìm thấy thông tin chuyến xe</Text>
                  <div className="p-bookingTicket_route_button">
                    <Button
                      handleClick={() =>
                        setValues({
                          indexActive: values.indexActive - 1,
                        })
                      }
                    >
                      Quay lại
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel active={values.indexActive === 2}>
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
                            placeholder={placeholder.name}
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
                            placeholder={placeholder.phone}
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
                            placeholder={placeholder.email}
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
              <Button
                handleClick={() =>
                  setValues({
                    indexActive: values.indexActive - 1,
                  })
                }
              >
                Quay lại
              </Button>
            </div>
          </TabPanel>
          <TabPanel active={values.indexActive === 3}>
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
              <Button
                handleClick={() =>
                  setValues({
                    indexActive: values.indexActive - 1,
                  })
                }
              >
                Quay lại
              </Button>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
