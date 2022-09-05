import React from "react";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";

const title = "tuyến phổ biến";
const listPlace = new Array(8).fill(  {
  title: "ha noi => ho chi minh",
  imgSrc: "https://picsum.photos/200",
  times: "8h",
  priceTicket: "300.000 đ",
  distance: "300 km",
  path: "tin-chi-tiet",
},);

export default function PopularRoute() {
  return (
    <div className="o-popularRoute">
      <div className="o-popularRoute_title">
        <Text
          modifiers={[
            "24x30",
            "raisinBlack",
            "600",
            "center",
            "uppercase",
            "coolBlack",
          ]}
          content={title}
        />
      </div>
      <div className="o-popularRoute_listPlace">
        {listPlace.map((item, index) => (
          <Link href={item.path}>
            <div
              className="o-popularRoute_listPlace_item"
              key={`item-list-${index.toString()}`}
            >
              <div className="o-popularRoute_listPlace_left">
                <Image
                  imgSrc={item.imgSrc}
                  alt="item-list-img"
                  ratio="160x76"
                />
              </div>
              <div className="o-popularRoute_listPlace_right">
                <Text
                  content={item.title}
                  modifiers={["center", "uppercase", "700", "electricCrimson"]}
                />
                <div className="o-popularRoute_listPlace_content">
                  <Text content={item.distance} />
                  <Text content={item.times} />
                  <Text content={item.priceTicket} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
