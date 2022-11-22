import React from "react";
import Text from "../../components/atoms/Text";
import Image from "../../components/atoms/Image";

const data ={
    name: 'Thắng',
    lastName: 'Ngô Xuân',
    email: 'thangnx.it@gmail.com',
    password: '1234',
    phone: 123344
}
const listTickert = {
  list: [
    {
        id: "Mã vé",
        route: "Tuyến",
      },
    {
      id: "1234",
      route: "Ngã tư Nhơn Hạnh - An Nhơn - Bình Định",
    },
    {
      id: "123",
      route: "Ngã tư Nhơn Hạnh - An Nhơn - Bình Định",
    },
  ],
};

export default function User() {
  return (
    <div className="p-user">
        <Text modifiers={['400','coolBlack', '30x32', 'center']}>Lịch sử mua hàng</Text>
      <div className="p-user_profile">
        <Image imgSrc="https://picsum.photos/200"/>
        <div className="p-user_info">
           <Text>{data.lastName + " "+ data.name}</Text>
           <Text modifiers={['400']}>{data.email}</Text>
           <Text modifiers={['400']}>{data.phone}</Text>
        </div>
      </div>
      <div className="p-user_history">
      <div className="p-user_history_booking">
      <table className="p-scheduleDetail_stopPoint_table">
          <thead className="p-scheduleDetail_stopPoint_thead">
            <Text modifiers={["coolBlack", "600", "16x42", "uppercase"]}>
                Lịch sử đặt vé
            </Text>
          </thead>
          {listTickert.list &&
          listTickert.list.length > 0 ? (
            <tbody className="p-scheduleDetail_stopPoint_tbody">
              {listTickert.list.map((item, index) => (
                <tr
                  className="p-scheduleDetail_stopPoint_tr"
                  key={`th-point-item-${index.toString()}`}
                >
                  <th className="p-scheduleDetail_stopPoint_th">
                    <Text modifiers={["15x42", index % 2 === 0 && "600"]}>
                      {item?.id}
                    </Text>
                  </th>
                  <th className="p-scheduleDetail_stopPoint_th">
                    <Text modifiers={["15x42", index % 2 === 0 && "600"]}>
                      {item.route}
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
      </div>
    </div>
  );
}
