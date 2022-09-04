/* eslint-disable */
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {TbArmchair} from 'react-icons/tb';
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Text from "../../components/atoms/Text";
import Pulldown from "../../components/molecules/Pulldown";
import Tabs, { Tab, TabPanel } from "../../components/organisms/Tabs";

const data = new Array(5).fill({
  timeGo: "08:00",
  timeEnd: "12:00",
  price: "200.000",
  type: "limousine",
  remaining: 32,
});

const listChair = new Array(10).fill({
  div: <TbArmchair/>,
})

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
    {
      id: "2",
      label: "Xác nhận lộ trình",
      div: (
        <div className="p-bookingTicket_route">
          <div className="p-bookingTicket_route_pulldown">
            <div className="p-bookingTicket_route_pulldown_item">
              <Pulldown placeholder="Giá" />
            </div>
            <div className="p-bookingTicket_route_pulldown_item">
              <Pulldown placeholder="Loại xe" />
            </div>
            <div className="p-bookingTicket_route_pulldown_item">
              <Pulldown placeholder="Giờ" />
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
                          <Text modifiers={['400', "24x34", 'jet']}>{item.timeGo}</Text> <AiOutlineArrowRight />{" "}
                          <Text modifiers={['400', "24x34", 'jet']}>{item.timeEnd}</Text>
                        </div>
                        <div className="p-bookingTicket_item_typeWrap">
                          <div className="p-bookingTicket_item_type">
                          <Text modifiers={['14x18']}>{item.price}</Text>
                          <Text modifiers={['14x18']}>{item.type}</Text>
                          <Text modifiers={['14x18']}>{item.remaining}</Text>
                          </div>
                          <div className="p-bookingTicket_item_choose">
                            <Text>Chọn</Text>
                            <input type="radio"/>
                          </div>
                        </div>
                        <div className="p-bookingTicket_item_bookingWrap">
                          <div className="p-bookingTicket_item_chairWrap">
                            {
                              listChair.map((item, index) => (
                                <div className="p-bookingTicket_item_chairWrap_chair">
                                  {item.div}
                                  <Text>{index}</Text>
                                </div>
                              ))
                            }
                          </div>
                          <div className="p-bookingTicket_item_statusWrap">
                            <div className="p-bookingTicket_item_seleted">
                              <div />
                              <Text>Đã chọn</Text>
                            </div>
                            <div className="p-bookingTicket_item_seleted p-bookingTicket_item_notyet">
                              <div />
                              <Text modifiers={['coolBlack']}>Chưa chọn</Text>
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
    {
      id: "3",
      label: "Thông tin khách hàng",
      div: (
        <div className="p-bookingTicket_schedule">
          <div className="p-bookingTicket_schedule_item">
            <Input label="Điểm đi" placeholder="Nhập điểm đi" />
          </div>
          <div className="p-bookingTicket_schedule_item">
            <Input label="Điểm đến" placeholder="Nhập điểm đi" />
          </div>
          <div className="p-bookingTicket_schedule_item">
            <Input placeholder="Ngày đi" />
          </div>
          <div className="p-bookingTicket_schedule_item">
            <Button>Tìm chuyến xe</Button>
          </div>
        </div>
      ),
    },
    {
      id: "4",
      label: "Thanh toán",
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
            <Button>Tìm chuyến xe</Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-bookingTicket">
      <div className="p-bookingTicket_booking">
        <Text modifiers={["600", "32x48", "coolBlack"]}>Đặt vé</Text>
      </div>
      <div className="p-bookingTicket_tabs"></div>
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
