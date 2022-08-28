import React from "react";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";
import Button from "../../atoms/Button";

const title = "tin tức";
const listNews = [
  {
    img: "https://picsum.photos/200",
    title: "Bai viet 1",
    description: "noi dung bai viet 1",
    path: "https://google.com",
  },
  {
    img: "https://picsum.photos/200",
    title: "Bai viet 1",
    description: "noi dung bai viet 1",
    path: "https://google.com",
  },
  {
    img: "https://picsum.photos/200",
    title: "Bai viet 1",
    description: "noi dung bai viet 1",
    path: "https://google.com",
  },
];

export default function Information() {
  return (
    <div className="o-information">
      <Text
        content={title}
        modifiers={["24x30", "uppercase", "700", "coolBlack", "center"]}
      />
      <div className="o-information_content">
        <div className="o-information_content_left">
          <Link href={listNews[0].path}>
            <Image alt="img-news" imgSrc={listNews[0].img} ratio="700x515" />
            <div className="o-information_content_left_description">
              <Text
                content={listNews[0].title}
                modifiers={["white", "20x28"]}
              />
              <Text
                content={listNews[0].description}
                modifiers={["white", "400"]}
              />
            </div>
          </Link>
        </div>
        <div className="o-information_content_right">
          <div className="o-information_content_right_item">
            <Link href={listNews[1].path}>
              <Image alt="img-news" imgSrc={listNews[1].img} ratio="2x1" />
              <div className="o-information_content_right_description">
                <Text
                  content={listNews[1].title}
                  modifiers={["white", "20x28"]}
                />
                <Text
                  content={listNews[1].description}
                  modifiers={["white", "400"]}
                />
              </div>
            </Link>
          </div>
          <div className="o-information_content_right_item">
            <Link href={listNews[2].path}>
              <Image alt="img-news" imgSrc={listNews[2].img} ratio="2x1" />
              <div className="o-information_content_right_description">
                <Text
                  content={listNews[2].title}
                  modifiers={["white", "20x28"]}
                />
                <Text
                  content={listNews[2].description}
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
    </div>
  );
}
