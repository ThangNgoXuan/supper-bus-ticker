import React from "react";
import Text from "../../atoms/Text";
import Slider from "react-slick";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";
import useValues from "../../../hooks/useValues";
import { useEffect } from "react";
import commonApi from "../../../api/commonApi";
import { useState } from "react";

const settings = {
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
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

export default function TopDestination() {
  const [topPalces, setTopPlaces] = useState([]);
  console.log(topPalces);

  useEffect(() => {
    commonApi
      .getPopularPlaces()
      .then((res) => {
        if (res?.status) {
          setTopPlaces(res?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="o-topDestinations">
      <div className="o-topDestinations_title">
        <Text
          modifiers={["24x30", "raisinBlack", "600", "coolBlack", "uppercase"]}
        >
          Khám phá Việt Nam
        </Text>
      </div>
      <div className="o-topDestinations_description">
        <Text modifiers={["16x24", "davysGrey", "400"]}>
          Các điểm đến phố biến này có nhiều điều chờ đón bạn
        </Text>
      </div>
      <div className="o-topDestinations_carouselWrap">
        <Slider {...settings}>
          {topPalces.map((item) => (
            <div
              className="o-topDestinations_carouselWrap_item"
              key={item?.key}
            >
              <Link href={item?.destination}>
                <Image imgSrc={item?.image} ratio="224x280" alt="place-image" />
                <Text
                  content={item?.name}
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
