import React from "react";
import Text from "../../atoms/Text";
import Image from "../../atoms/Image";
import Link from "../../atoms/Link";
import useValues from "../../../hooks/useValues";
import { useEffect } from "react";
import routesApi from "../../../api/routesApi";
import { useNavigate } from "react-router-dom";

const title = "tuyến phổ biến";
export default function PopularRoute() {
  const [values, setValues] = useValues({
    data: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    routesApi.getAllRoute().then((res) => {
      setValues({
        data: res?.data,
      });
    });
  }, []);

  console.log("data", values.data);

  const handleRedirect = (data) => {
    navigate(`/dat-ve?date=2022-10-10&route=${data._id}`);
  };

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
                onClick={() => {
                  handleRedirect(item);
                }}
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
