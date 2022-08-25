import React from "react";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import ministryImg from '../../../assets/images/bocongthuong.png';


const listContact = [
    {title: 'hotline:'},
    {title: 'hotline:'},
    {title: 'hotline:'},
    {title: 'hotline:'},
    {title: 'hotline:'},
];

const ministry = 'Giấy Chứng nhận Đăng ký kinh doanh số: 0302029252 do Sở Kế hoạch đầu tư TPHCM cấp ngày 08/03/2022';

export default function Footer() {
  return (
    <div className="o-footer">
      <div className="o-footer_before">
        <div className="o-footer_before_ministry">
          <Image imgSrc={ministryImg} ratio="128x48"/>
          <Text modifiers={['white', '14x18']}>
            {ministry}
          </Text>
        </div>
        <div className="o-footer_before_info">
            <Image imgSrc="https://picsum.photos/50/50"/>
            <ul className="o-footer_before_listContact">
                {listContact.map((item, index) => (
                    <li className="o-footer_before_listItem" key={`list-content-item-${index}`}><Text modifiers={['white', '14x18']}>{item.title}</Text></li>
                ))}
            </ul>
        </div>
        <div className="o-footer_before_map">
            <Image imgSrc="https://picsum.photos/50/50"/>
        </div>
      </div>
      <div className="o-footer_after">
        <Text modifiers={["center", '700', 'black', '16x24']}>Copyright @ 2022 Team 8</Text>
      </div>
    </div>
  );
}
