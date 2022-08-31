import React from "react"
import { AiOutlineClockCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";

export default function NewsCard({ title, more, link, time, imgSrc }) {
  return (
    <div className="o-newsCard">
      <Link href={link}>
        <Image imgSrc={imgSrc} ratio="425x285" />
        <div className="o-newsCard_content">
          <div className="o-newsCard_time">
            <AiOutlineClockCircle/><Text modifiers={["16x20", "dimGray", "400"]}>{time}</Text>
          </div>
          <div className="o-newsCard_title">
            <Text modifiers={["28x32", "oxfordBlue", "400"]}>{title}</Text>
          </div>
          <div className="o-newsCard_description">
            <Text modifiers={["16x34", "electricCrimson", "400"]}>{more}</Text>
          </div>
        </div>
      </Link>
    </div>
  );
}

NewsCard.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  time: PropTypes.string,
  imgSrc: PropTypes.string,
};

NewsCard.defaultProps = {
  title: "bai viet mot",
  description: "content bai viet mot",
  link: "https://google.com",
  imgSrc: "https://picsum.photos/200",
};
