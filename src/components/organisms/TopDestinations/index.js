import React from "react";
import Text from "../../atoms/Text";
import Slider from "react-slick";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";

const title = "Gợi ý những địa điểm dự lịch phổ biến";
const description = "dqwdqwdqwdqw";
const settings = {
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4500,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
};

const dataList = [
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/229",
    text: "Han noi",
  },
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/228",
    text: "Han noi",
  },
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/227",
    text: "hanoi",
  },
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/2226",
    text: "hanoi",
  },
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/224",
    text: "hanoi",
  },
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/222",
    text: "hanoi",
  },
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/223",
    text: "hanoi",
  },
  {
    link: "https://google.com",
    imgSrc: "https://picsum.photos/225",
    text: "hanoi",
  },
];

export default function TopDestination() {
  return (
    <div className="o-topDestinations">
      <div className="o-topDestinations_title">
        <Text modifiers={["24x30", "raisinBlack", "600", 'coolBlack']}>{title}</Text>
      </div>
      <div className="o-topDestinations_description">
        <Text modifiers={["16x24", "davysGrey", "400"]}>{description}</Text>
      </div>
      <div className="o-topDestinations_carouselWrap">
        <Slider {...settings}>
          {dataList.map((item, index) => (
            <div
              className="o-topDestinations_carouselWrap_item"
              key={`item-carousel-${index.toString()}`}
            >
              <Link href={item.link}>
                <Image imgSrc={item.imgSrc} ratio="224x280" alt='place-image' />
                <Text
                  content={item.text}
                  modifiers={["uppercase", "16x24", "600", "white"]}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
