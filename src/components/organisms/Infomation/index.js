import React from "react";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import newsApi from "../../../api/newsApi";

const title = "tin tức";

export default function Information() {
  const [loading, data, _, fetch, refetch] = useFetch({}, newsApi.getAllNews);

  useEffect(() => {
    fetch({}, true);
    /*eslint-disable-next-line */
  }, []);

  /*eslint-disable-next-line */
  if (loading) return <div>Loading...</div>;

  return (
    <div className="o-information">
      <Text
        content={title}
        modifiers={["24x30", "uppercase", "700", "coolBlack", "center"]}
      />
      {data && Array.isArray(data) && data.length > 0 && (
        <>
          <div className="o-information_content">
            <div className="o-information_content_left">
              <Link href={data?.[0]?.name}>
                <Image
                  alt="img-news"
                  imgSrc={data?.[0]?.thumbnail}
                  ratio="700x515"
                />
                <div className="o-information_content_left_description">
                  <Text
                    content={data?.[0]?.title}
                    modifiers={["white", "20x28"]}
                  />
                  <Text
                    content={data?.[0]?.subtitle}
                    modifiers={["white", "400"]}
                  />
                </div>
              </Link>
            </div>
            <div className="o-information_content_right">
              <div className="o-information_content_right_item">
                <Link href={data?.[1]?.path}>
                  <Image
                    alt="img-news"
                    imgSrc={data?.[1]?.thumbnail}
                    ratio="2x1"
                  />
                  <div className="o-information_content_right_description">
                    <Text
                      content={data?.[1]?.title}
                      modifiers={["white", "20x28"]}
                    />
                    <Text
                      content={data?.[1]?.subtitle}
                      modifiers={["white", "400"]}
                    />
                  </div>
                </Link>
              </div>
              <div className="o-information_content_right_item">
                <Link href={data?.[2]?.path}>
                  <Image
                    alt="img-news"
                    imgSrc={data?.[2]?.thumbnail}
                    ratio="2x1"
                  />
                  <div className="o-information_content_right_description">
                    <Text
                      content={data?.[2]?.title}
                      modifiers={["white", "20x28"]}
                    />
                    <Text
                      content={data?.[2]?.subtitle}
                      modifiers={["white", "400"]}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="o-information_button">
            <Button modifies={["secondary"]}>
              <Link href="/tin-tuc">
                <Text modifiers={["electricCrimson"]}>Xem thêm</Text>
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
