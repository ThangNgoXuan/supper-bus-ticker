import React from "react";
import Button from "../../components/atoms/Button";
import InputDate from "../../components/atoms/InputDate";
import Link from "../../components/atoms/Link";
import Text from "../../components/atoms/Text";

const stopPoint = "Bến xe và địa điểm trung chuyển";
const scheduleDetail = {
  name: "Bình Định => Sài gòn",
  stopPointList: [
    {
      point: "Công viên Nhơn Hạnh",
      address: "Ngã tư Nhơn Hạnh - An Nhơn - Bình Định",
      time: "Khởi hành",
    },
    {
      point: "Công viên Nhơn Hạnh",
      address: "Ngã tư Nhơn Hạnh - An Nhơn - Bình Định",
      time: "Sau 30'",
    },
  ],
  totalTrips: [
    {
      start: "05:30 PM",
      end: "03:00 AM",
      price: "300.000",
      link: "/dat-ve",
    },
    {
      start: "05:30 PM",
      end: "03:00 AM",
      price: "300.000",
      link: "/dat-ve",
    },
    {
      start: "05:30 PM",
      end: "03:00 AM",
      price: "300.000",
      link: "/dat-ve",
    },
  ],
};

export default function ScheduleDetail() {
  return (
    <div className="p-scheduleDetail">
      <div className="p-scheduleDetail_stopPoint">
        <table className="p-scheduleDetail_stopPoint_table">
          <thead className="p-scheduleDetail_stopPoint_thead">
            <Text modifiers={["coolBlack", "600", "16x42", "uppercase"]}>
              {stopPoint}
            </Text>
          </thead>
          {scheduleDetail.stopPointList &&
          scheduleDetail.stopPointList.length > 0 ? (
            <tbody className="p-scheduleDetail_stopPoint_tbody">
              {scheduleDetail.stopPointList.map((item, index) => (
                <tr
                  className="p-scheduleDetail_stopPoint_tr"
                  key={`th-point-item-${index.toString()}`}
                >
                  <th className="p-scheduleDetail_stopPoint_th">
                    <Text modifiers={["15x42", index % 2 === 0 && "600"]}>
                      {item.point}
                    </Text>
                  </th>
                  <th className="p-scheduleDetail_stopPoint_th">
                    <Text modifiers={["15x42", index % 2 === 0 && "600"]}>
                      {item.address}
                    </Text>
                  </th>
                </tr>
              ))}
            </tbody>
          ) : (
            <Text modifiers={["coolBlack", "600"]}>Không có dữ liệu</Text>
          )}
        </table>
      </div>
      <div className="p-scheduleDetail_detail">
        <div className="p-scheduleDetail_detail_name">
          <Text modifiers={["coolBlack", "600", "16x42", "uppercase"]}>{scheduleDetail.name}</Text>
        </div>
        <div className="p-scheduleDetail_detail_body">
          <div className="p-scheduleDetail_detail_tableDetail">
            <table className="p-scheduleDetail_detail_tableDetail_table">
              <thead className="p-scheduleDetail_detail_tableDetail_table_thead">
                <tr className="p-scheduleDetail_detail_tableDetail_table_tr">
                  <th className="p-scheduleDetail_detail_tableDetail_table_th">
                    <Text>Giờ</Text>
                  </th>
                  <th className="p-scheduleDetail_detail_tableDetail_table_th">
                    <Text>Địa điểm</Text>
                  </th>
                </tr>
              </thead>
              {scheduleDetail.stopPointList &&
              scheduleDetail.stopPointList.length > 0 ? (
                <tbody>
                  {scheduleDetail.stopPointList.map((item, index) => (
                    <tr
                      key={`point-item-${index.toString()}`}
                      className="p-scheduleDetail_detail_tableDetail_table_tr"
                    >
                      <th className="p-scheduleDetail_detail_tableDetail_table_th">
                        <Text modifiers={["15x42", '400']}>{item.time}</Text>
                      </th>
                      <th className="p-scheduleDetail_detail_tableDetail_table_th">
                        <Text modifiers={["15x42", '400']}>{item.address}</Text>
                      </th>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <Text> Không có dữ liệu</Text>
              )}
            </table>
          </div>
          <div className="p-scheduleDetail_detail_time">
            <div className="p-scheduleDetail_time_chooseTime">
              <InputDate/>
              <Text>Chọn ngày đi</Text>
            </div>
            <table className="p-scheduleDetail_time_table">
              <thead className="p-scheduleDetail_time_table_thead">
                <tr className="p-scheduleDetail_time_table_tr">
                  <th className="p-scheduleDetail_time_table_th">
                    <Text>Giờ chạy</Text>
                  </th>
                  <th className="p-scheduleDetail_time_table_th">
                    <Text>Giờ đến</Text>
                  </th>
                  <th className="p-scheduleDetail_time_table_th">
                    <Text>Giá vé</Text>
                  </th>
                </tr>
              </thead>
              {scheduleDetail.totalTrips &&
              scheduleDetail.totalTrips.length > 0 ? (
                <tbody>
                  {scheduleDetail.totalTrips.map((item, index) => (
                    <tr key={`key-tr-item-${index.toString}`}>
                      <th className="p-scheduleDetail_time_table_th">
                        <Text>{item.start}</Text>
                      </th>
                      <th className="p-scheduleDetail_time_table_th">
                        <Text>{item.end}</Text>
                      </th>
                      <th className="p-scheduleDetail_time_table_th">
                        <Text>{item.price}</Text>
                      </th>
                      <th className="p-scheduleDetail_time_table_th">
                        <Link href={item.link}>
                          <Button>
                            <Text modifiers={["white"]}>Đặt vé</Text>
                          </Button>
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <Text>Không có dữ liệu</Text>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
