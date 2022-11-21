import React, { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import newsApi from "../../api/newsApi";
import Image from "../../components/atoms/Image";
import Link from "../../components/atoms/Link";
import Text from "../../components/atoms/Text";
import Pagination from "../../components/organisms/Pagination";
import useFetch from "../../hooks/useFetch";
import moment from "moment/moment";
import Slider from "react-slick";

const title = "Tin tức nổi bật";

export default function News() {
  /*eslint-disable-next-line */
  const [loading, data, _, fetch, refetch] = useFetch(
    { status: true },
    newsApi.getAllNews
  );

  useEffect(() => {
    fetch({}, true);
    /*eslint-disable-next-line */
  }, []);

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  };

  const dataList = new Array(6).fill({
    link: "/tin-chi-tiet",
    imgSrc: "https://picsum.photos/229",
    text: "Han noi",
  });

  return (
    <div className="p-news">
      <div className="p-news_carousel">
        <Slider {...settings}>
          {dataList.map((item, index) => (
            <div key={`item-carousel-${index.toString()}`}>
              <Image imgSrc={item.imgSrc} ratio="936x233" alt="place-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="p-news_title">
        <Text modifiers={["32x46", "600", "coolBlack", "left"]}>{title}</Text>
      </div>
      <div className="p-news_wrapContent">
        <div className="p-news_wrapContent_header">
          <Link href={data[0]?.slug}>
            <Image imgSrc={data[0]?.thumbnail} ratio="538x382" />
            <Text modifiers={["32x48", "outerSpace", "600", "uppercase"]}>
              {data[0]?.title}
            </Text>
            <Text
              modifiers={["16x24", "outerSpace", "400"]}
              content={data[0]?.subtitle}
            />
            <div className="p-news_wrapContent_header_time">
              <AiOutlineClockCircle />
              <Text modifiers={["16x20", "dimGray", "400"]}>
                {moment(data[0]?.createdAt).format("DD/MM/YYYY")}
              </Text>
            </div>
          </Link>
        </div>
        <div className="p-news_wrapContent_left">
          {data &&
            data.length > 0 &&
            data.slice(1, 5).map((item) => (
              <div className="p-news_wrapContent_item" key={item?._id}>
                <Image
                  imgSrc={item?.thumbnail || "htpps://picsum.photos/200"}
                  ratio="150x112"
                />
                <div className="p-news_wrapContent_item_content">
                  <Text modifiers={["18x26", "outerSpace", "600", "uppercase"]}>
                    {item?.title}
                  </Text>
                  <Text modifiers={["16x24", "outerSpace", "400"]}>
                    {moment(item?.createdAt).format("DD/MM/YYYY")}
                  </Text>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="p-news_allNews">
        <Text modifiers={["32x46", "600", "coolBlack", "left"]}>
          Tất cả tin tức
        </Text>
        <div className="p-news_allNews_listNew">
          {data &&
            data.length > 0 &&
            data.slice(0, 6).map((item) => (
              <div key={item._id} className="p-news_allNews_listNew_item">
                <Image ratio="150x112" imgSrc={item?.thumbnail} />
                <div className="p-news_allNews_listNew_item_content">
                  <Text modifiers={["16x18", "600", "coolBlack", "left"]}>
                    {item?.title}
                  </Text>
                  <Text modifiers={["12x18", "400", "left"]}>
                    {item?.subtitle}
                  </Text>
                  <Text modifiers={["16x24", "outerSpace", "400"]}>
                    {moment(item?.createdAt).format("DD/MM/YYYY")}
                  </Text>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="p-news_pagination">
        <Pagination totalPage={50} handleChangePage={() => console.log(1)} />
      </div>
    </div>
  );
}
