import React from "react";
import HeroBanner from "../../components/organisms/HeroBanner";
import Input from "../../components/atoms/Input";
import Text from "../../components/atoms/Text";
import Button from '../../components/atoms/Button';
import Link from "../../components/atoms/Link";

const title = "Tìm chuyến xe";
const dataList = new Array(20).fill({
  addressFrom: "Hồ Chí Minh",
  addressEnd: [
    { address: "Hà Nội", time: "8", km: "300", type: "Giường", linkDetail: '/chi-tiet-chuyen-xe', linkBook: "/dat-ve" },
    { address: "Hà Nội", time: "8", km: "300", type: "Giường", linkDetail: '/chi-tiet-chuyen-xe', linkBook: "/dat-ve" },
    { address: "Hà Nội", time: "8", km: "300", type: "Giường", linkDetail: '/chi-tiet-chuyen-xe', linkBook: "/dat-ve" },
    { address: "Hà Nội", time: "8", km: "300", type: "Giường", linkDetail: '/chi-tiet-chuyen-xe', linkBook: "/dat-ve" },
  ],
});

const listTh = [
  { item: "Tuyến đường" },
  { item: "Loại xe" },
  { item: "Quảng đường" },
  { item: "Thời gian đi" },
  { item: "Giá vé" },
  { item: "Giờ chạy" },
];

export default function Schedule() {
  return (
    <>
      <HeroBanner />
      <div className="p-schedule">
        <div className="p-schedule_searchWrap">
          <Text>Search chuyến đi</Text>
          <Input />
        </div>
        <div className="p-schedule_title">
          <Text>{title}</Text>
        </div>
        <div className="p-schedule_listSchedule">
          <table className="p-schedule_table">
            <tr className="p-schedule_table_tr">
              {listTh &&
                listTh.length > 0 &&
                listTh.map((item, index) => (
                  <th key={`item-th-${index.toString()}`} className="p-schedule_table_th">
                    <Text>{item.item}</Text>
                  </th>
                ))}
            </tr>
          </table>
          <div className="p-schedule_table_body">
            {dataList &&
              dataList.length > 0 &&
              dataList.map((item, index) => (
                <table
                  key={`list-place-${index.toString()}`}
                  className="p-schedule_table_item"
                >
                  <thead className="p-schedule_table_thead">
                    <Text modifiers={['22x32', '600', 'electricCrimson']}>{item.addressFrom}</Text>
                  </thead>
                  <tbody className="p-schedule_table_tbody">
                    {item.addressEnd.map((ele, idx) => (
                      <tr key={`item-placeEnd-${idx.toString()}`} className='p-schedule_table_tbody_tr'>
                        <th className="p-schedule_table_tbody_th">{ele.address}</th>
                        <th className="p-schedule_table_tbody_th">{ele.type}</th>
                        <th className="p-schedule_table_tbody_th">{ele.km}</th>
                        <th className="p-schedule_table_tbody_th">{ele.time}</th>
                        <th className="p-schedule_table_tbody_th"><Link href={ele.linkDetail}><Text modifiers={['coolBlack']}>Chi tiết</Text></Link></th>
                        <th className="p-schedule_table_tbody_th"><Link href={ele.linkBook}><Button><Text modifiers={['white']}>Đặt vé</Text></Button></Link></th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
