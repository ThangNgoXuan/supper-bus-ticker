import React from "react";
import { useState } from "react";
import Button from "../../../components/atoms/Button";
import Text from "../../../components/atoms/Text";
import Pulldown from "../../../components/molecules/Pulldown";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbArmchair } from "react-icons/tb";

const listChair = new Array(10).fill({
    div: <TbArmchair />,
  });

const data = new Array(5).fill({
  timeGo: "08:00",
  timeEnd: "12:00",
  price: "200.000",
  type: "limousine",
  remaining: 32,
});

const typeCoach = [
  { id: "1", name: "ghe", value: "Ghế" },
  { id: "2", name: "giuong", value: "Giường" },
  { id: "3", name: "limousine", value: "Limousine" },
];

const priceType = [
  { id: "1", name: "hight to low", value: "Cao đến thấp" },
  { id: "2", name: "low to hight", value: "Thấp đến cao" },
];

export default function BookingTicketRoute() {
    const [indexActive, setIndexActive] = useState(0);
  return (
    <div className="p-bookingTicket_route">
      <div className="p-bookingTicket_route_pulldown">
        <div className="p-bookingTicket_route_pulldown_item">
          <Pulldown placeholder="Giá" listData={priceType} />
        </div>
        <div className="p-bookingTicket_route_pulldown_item">
          <Pulldown placeholder="Loại xe" listData={typeCoach} />
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
  );
}
