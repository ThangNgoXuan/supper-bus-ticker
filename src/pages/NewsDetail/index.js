import React, { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import newsApi from "../../api/newsApi";
import Text from "../../components/atoms/Text";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function NewsDetail() {
  const { slug } = useParams();
  const [loading, data, _, fetch, refetch] = useFetch({slug},
    newsApi.findBySlug);

  useEffect(() => {
    fetch({}, true);
    /*eslint-disable-next-line */
  }, []);
  return (
    <div className="p-newsDetail">
      <Text modifiers={["coolBlack", "600", "52x68"]}>
        {data?.title}
      </Text>
      <div className="p-newsDetail_detailWrap">
        <div className="p-newsDetail_detailWrap_time">
          <AiOutlineClockCircle />
          <Text modifiers={["dimGray", "600"]}>{moment(data?.createdAt).format('DD/MM/YYYY')}</Text>
        </div>
        <div className="p-newsDetail_detailWrap_trailer">
          <Text modifiers={["16x24", "400", "outerSpace", "italic"]}>
            {data?.subtitle}
          </Text>
        </div>
      </div>
      <div className="p-newsDetail_content">
        <Text modifiers={["400"]} content={data?.content} />
      </div>
    </div>
  );
}
