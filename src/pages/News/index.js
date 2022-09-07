import React, { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import newsApi from "../../api/newsApi";
import Image from "../../components/atoms/Image";
import Link from "../../components/atoms/Link";
import Text from "../../components/atoms/Text";
import NewsCard from "../../components/organisms/NewsCard";
import Pagination from "../../components/organisms/Pagination";
import useFetch from "../../hooks/useFetch";
import moment from "moment/moment";

const title = "Tin tức";

export default function News() {
  /*eslint-disable-next-line */
  const [loading, data, _, fetch, refetch] = useFetch({}, newsApi.getAllNews);

  useEffect(() => {
    fetch({}, true);
    /*eslint-disable-next-line */
  }, []);

  console.log(data);

  return (
    <div className="p-news">
       <div className="p-news_title">
        <Text modifiers={["30x32", "600", "coolBlack", "center", "uppercase"]}>
          {title}
        </Text>
      </div>
      <div className="p-news_wrapContent">
        <Link href={data[0]?.slug}>
          <div className="p-news_wrapContent_header">
            <Image imgSrc={data[0]?.thumbnail} ratio="895x590" />
            <div className="p-news_fistNews">
              <div className="p-news_fistNews_time">
                <AiOutlineClockCircle />
                <Text modifiers={["16x20", "dimGray", "400"]}>
                  {moment(data[0]?.createdAt).format('DD/MM/YYYY')}
                </Text>
              </div>
              <div className="p-news_fistNews_title">
                <Text modifiers={["28x32", "oxfordBlue", "400"]}>
                  {data[0]?.title}
                </Text>
              </div>
              <div className="p-news_fistNews_spanBorder" />
              <div className="p-news_fistNews_description">
                <Text modifiers={["16x24", "outerSpace", "400"]} content={data[0]?.subtitle} />
              </div>
              <div className="p-news_fistNews_more">
                <Text modifiers={["16x34", "electricCrimson", "400"]}>
                  {moment(data[0]?.more).format('DD/MM/YYYY')}
                 </Text>
              </div>
            </div>
          </div>
        </Link>
        <div className="p-news_wrapContent_bottom">
          {data &&
            data.length > 0 &&
            data.slice(1).map((item) => (
              <NewsCard
                key={item?._id}
                link={item?.slug}
                more="Xem thêm"
                time={moment(item?.createdAt).format('DD/MM/YYYY')}
                title={item?.title}
                imgSrc={item?.thumbnail}
              />
            ))}
        </div>
      </div>
      <div className="p-news_pagination">
        <Pagination totalPage={50} handleChangePage={() => console.log(1)} />
      </div>
    </div>
  );
}
