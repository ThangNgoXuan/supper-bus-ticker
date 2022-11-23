import React from "react";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";
import useValues from "../../../hooks/useValues";
import { useEffect } from "react";
import routesApi from "../../../api/routesApi";

const title = "tuyến phổ biến";
const listPlace = new Array(8).fill({
  title: "ha noi => ho chi minh",
  imgSrc: "https://picsum.photos/200",
  times: "8h",
  priceTicket: "300.000 đ",
  distance: "300 km",
  path: "tin-chi-tiet",
});

export default function PopularRoute() {
  const [values, setValues] = useValues({
    data: [],
  });

  useEffect(() => {
    routesApi.getAllRoute().then((res) => {
      setValues({
        data: res?.data,
      });
    });
  }, []);

  console.log("data", values.data);

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
        {values.data &&
          values.data.slice(0, 5).map((item) => (
            <Link>
              <div
                className="o-popularRoute_listPlace_item"
                key={`item-list-${item?._id.toString()}`}
              >
                <div className="o-popularRoute_listPlace_left">
                  <Image
                    imgSrc="https://picsum.photos/200"
                    alt="item-list-img"
                    ratio="160x76"
                  />
                </div>
                <div className="o-popularRoute_listPlace_right">
                  <Text
                    content={item?.name}
                    modifiers={[
                      "center",
                      "uppercase",
                      "700",
                      "electricCrimson",
                    ]}
                  />
                  <div className="o-popularRoute_listPlace_content">
                    <Text>{item?.distance} KM</Text>
                    <Text>{Math.round(item?.duration / 60)} Giờ</Text>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
