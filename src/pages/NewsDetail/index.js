import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Text from "../../components/atoms/Text";

const dataNewDetail = {
  title: "Sinh viên trường Nova College đã trở lại trường học.",
  time: "02/03/2022",
  trailer:
    "Sau thời gian dài học trực tuyến và nghỉ Tết Nguyên đán 2022, ngày 21/2 vừa qua, sinh viên trường Cao đẳng Nova đã chính thức trở lại trường học. ",
  content: `<p>Sau thời gian dài học trực tuyến và nghỉ Tết Nguyên đán 2022, ngày 21/2 vừa qua, sinh viên trường Cao đẳng Nova đã chính thức trở lại trường học. </p> <br>\
    <br/><img style={{maxWidth: '100%'}} src="https://picsum.photos/300/300"/ alt="imag">
    <p>Sau khi được chào đón bởi những tiết mục văn nghệ ấn tượng và các trò chơi hoạt náo từ CLB, các sinh viên tự do tham quan, trải nghiệm không gian phòng học, khu vực thực hành cùng các phòng chức năng.

    Toàn bộ giảng đường, phòng học được thiết kế với tính linh hoạt, tương tác cao; trang thiết bị hiện đại hỗ trợ các sinh viên tiếp thu kiến thức một cách tốt nhất.  Phòng thực hành, thí nghiệm chú trọng đầu tư công nghệ mới, với đầy đủ dụng cụ, trang thiết bị tân tiến, đảm bảo sinh viên có năng lực thực hành nghề tốt.</p>
    <br/><img style={{maxWidth: '100%'}} src="https://picsum.photos/300/300"/ alt="imag">
    <p>Sau khi được chào đón bởi những tiết mục văn nghệ ấn tượng và các trò chơi hoạt náo từ CLB, các sinh viên tự do tham quan, trải nghiệm không gian phòng học, khu vực thực hành cùng các phòng chức năn
    <br/><img style={{maxWidth: '100%'}} src="https://picsum.photos/300/300"/ alt="imag">
    <br/><img style={{maxWidth: '100%'}} src="https://picsum.photos/300/300"/ alt="imag">
        Toàn bộ giảng đường, phòng học được thiết kế với tính linh hoạt, tương tác cao; trang thiết bị hiện đại hỗ trợ các sinh viên tiếp thu kiến thức một cách tốt nhất.  Phòng thực hành, thí nghiệm chú trọng đầu tư công nghệ mới, với đầy đủ dụng cụ, trang thiết bị tân tiến, đảm bảo sinh viên có năng lực thực hành nghề tốt.</
    <br/><img style={{maxWidth: '100%'}} src="https://picsum.photos/300/300"/ alt="imag">


    `,
};
export default function NewsDetail() {
  return (
    <div className="p-newsDetail">
      <Text modifiers={["coolBlack", "600", '52x68']}>{dataNewDetail.title}</Text>
      <div className="p-newsDetail_detailWrap">
        <div className="p-newsDetail_detailWrap_time">
          <AiOutlineClockCircle /> <Text modifiers={['dimGray', '600']}>{dataNewDetail.time}</Text>
        </div>
        <div className="p-newsDetail_detailWrap_trailer">
          <Text modifiers={["16x24", "400", 'outerSpace', 'italic']}>{dataNewDetail.trailer}</Text>
        </div>
      </div>
      <div className="p-newsDetail_content">
        <Text modifiers={["400"]} content={dataNewDetail.content} />
      </div>
    </div>
  );
}
