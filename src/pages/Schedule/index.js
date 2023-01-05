import React from "react";
import HeroBanner from "../../components/organisms/HeroBanner";
import Input from "../../components/atoms/Input";
import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import Link from "../../components/atoms/Link";
import { FiSearch } from "react-icons/fi";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import newsApi from "../../api/newsApi";
import routesApi from "../../api/routesApi";
import { LoadingComponent } from "../../components/molecules/Loading";
import Select from "react-select";
import useValues from "../../hooks/useValues";

const title = "Tìm chuyến xe";

const listTh = [
  { item: "Tuyến đường" },
  { item: "Loại xe" },
  { item: "Quảng đường" },
  { item: "Thời gian đi" },
  { item: "Giá vé" },
  { item: "Giờ chạy" },
];

export default function Schedule() {
  const [values, setValues] = useValues({
    listRoutes: [],
    selectedRoute: ''
  });

  const [loading, data, _, fetch, refetch] = useFetch(
    {},
    routesApi.getRoutesGroupby
  );

  console.log('data',data);

  useEffect(() => {
    fetch({}, true);
    /*eslint-disable-next-line */
    setValues({
      listRoutes: data
    })
  }, []);

  /*eslint-disable-next-line */
  if (loading) return <div>Loading...</div>;

  console.log('listRoute', values)

  const handleSelectRoute = () => {};
  return (
    <>
      <div className="p-schedule">
        <div className="p-schedule_searchWrap">
          <Text modifiers={["22x32", "coolBlack", "600"]}>
            Search chuyến đi
          </Text>
          <div className="p-schedule_select">
              <Select
                onChange={(seleted) => handleSelectRoute(seleted)}
                options={values.listRoutes}
                value={values.selectedRoute}
                placeholder="Chọn tuyến xe"
                styles={{
                  width:'500px',
                }}
              />
            <Button>
              <FiSearch />
            </Button>
          </div>
        </div>
        <div className="p-schedule_title">
          <Text modifiers={["22x32", "coolBlack", "600"]}>{title}</Text>
        </div>
        <div className="p-schedule_listSchedule">
          <table className="p-schedule_table">
            <tr className="p-schedule_table_tr">
              {listTh &&
                listTh.length > 0 &&
                listTh.map((item, index) => (
                  <th
                    key={`item-th-${index.toString()}`}
                    className="p-schedule_table_th"
                  >
                    <Text>{item.item}</Text>
                  </th>
                ))}
            </tr>
          </table>
          <div className="p-schedule_table_body">
            {data &&
              data?.length > 0 &&
              data.map((item, index) => (
                <table key={item?._id} className="p-schedule_table_item">
                  <thead className="p-schedule_table_thead">
                    <Text modifiers={["22x32", "600", "electricCrimson"]}>
                      {item?.name}
                    </Text>
                  </thead>
                  <tbody className="p-schedule_table_tbody">
                    {item?.data.map((ele, idx) => (
                      <tr key={ele?._id} className="p-schedule_table_tbody_tr">
                        <th className="p-schedule_table_tbody_th">
                          {ele?.to?.name}
                        </th>
                        <th className="p-schedule_table_tbody_th">
                          {ele?.vehicle?.type}
                        </th>
                        <th className="p-schedule_table_tbody_th">
                          {ele?.distance}
                        </th>
                        <th className="p-schedule_table_tbody_th">
                          {ele?.duration}
                        </th>
                        <th className="p-schedule_table_tbody_th">
                          <Link href={ele?.linkDetail}>
                            <Text modifiers={["coolBlack"]}>Chi tiết</Text>
                          </Link>
                        </th>
                        <th className="p-schedule_table_tbody_th">
                          <Link href={ele?.linkBook}>
                            <Button>
                              <Text modifiers={["white"]}>Đặt vé</Text>
                            </Button>
                          </Link>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
