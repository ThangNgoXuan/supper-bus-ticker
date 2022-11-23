import React, { useEffect } from "react";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import useValues from "../../../hooks/useValues";
import routesApi from "../../../api/routesApi";

export default function HeroBanner() {
  const [values, setValues] = useValues({
    selectedFrom: "",
    selectedTo: "",
    selectedTime: new Date(),
    listRoutes: [],
    listRoutesCustom: [],
  });

  function handleChange(selectedOption) {
    setValues({ selectedOption });
  }

  useEffect(() => {
    routesApi.getClientRoutes().then((res) => {
      if (res?.status) {
        setValues({
          listRoutes: res?.data,
          listRoutesCustom: customRoutes(res?.data),
          selectedFrom: {
            label: res?.data[0]?.from?.name,
            value: res?.data[0]?.from?._id,
          },
          selectedTo: {
            label: res?.data[0]?.to?.name,
            value: res?.data[0]?.to?._id,
          },
        });
      }
    });
  }, []);

  const customRoutes = (routes) => {
    let from = [];
    let to = [];

    if (Array.isArray(routes)) {
      //ban đầu
      routes.forEach((element) => {
        if (!from.find((item) => item?.value === element?.from?._id)) {
          from.push({ label: element?.from?.name, value: element?.from._id });
        }
        if (!to.find((item) => item?.value === element?.to?._id)) {
          to.push({ label: element?.to?.name, value: element?.to?._id });
        }
      });
    }
    return { from, to };
  };

  const handleReset = () => {};

  const handleChoose = (type, value) => {
    let from = values.listRoutesCustom.from;
    let to = values.listRoutesCustom.to;
    if (type === "from") {
      to = values.listRoutes
        .filter((item) => item.from._id === value.value)
        .map((item2) => ({
          label: item2?.to?.name,
          value: item2?.to?.id,
        }));
      setValues({
        listRoutesCustom: {
          to: to,
        },
      });
    } else if (type === "to") {
      from = values.listRoutes
        .filter((item) => item.to._id === value.value)
        .map((item2) => ({
          label: item2?.from?.name,
          value: item2?.from?.id,
        }));
      setValues({
        listRoutesCustom: {
          from: from,
        },
      });
    }
  };

  const selectRoutesByPoints = (from, to) => {
    let result = "";
    if (from && to) {
      result = values?.listRoutes?.find((item) => {
        return item.from._id === from && item.to._id === to;
      });
    }
    return result;
  };

  const handleSelectRoute = (selected, type) => {
    if (type === "from") {
      setValues({
        selectedFrom: { label: selected.label, value: selected.value },
      });
      handleChoose(type, selected);
    } else if (type === "to") {
      setValues({
        selectedTo: { label: selected.label, value: selected.value },
      });
      handleChoose(type, selected);
    }
  };

  const handleSearch = () => {
    return selectRoutesByPoints(
      values.selectedFrom.value,
      values.selectedTo.value
    );
  };

  return (
    <div className="o-heroBanner">
      <Image imgSrc="https://picsum.photos/1024/255" ratio="1024x255" />
      <div className="o-heroBanner_content">
        <Text modifiers={["coolBlack", "600", "32x48", "center"]}>
          Tìm kiếm vé xe với BusTicket
        </Text>
        <div className="o-heroBanner_search">
          <div className="o-heroBanner_search_select">
            <Select
              onChange={(seleted) => handleSelectRoute(seleted, "from")}
              options={values.listRoutesCustom.from}
              value={values.selectedFrom}
            />
          </div>
          <div className="o-heroBanner_search_select">
            <Select
              onChange={(seleted) => handleSelectRoute(seleted, "to")}
              options={values.listRoutesCustom.to}
              value={values.selectedTo}
            />
          </div>
          <div className="o-heroBanner_search_select">
            <ReactDatePicker
              dateFormat="dd/MM/yyyy"
              selected={values.selectedTime}
              onChange={(date) => setValues({ selectedTime: date })}
            />
            <Button handleClick={() => handleReset()}><Text>Reset tìm kiếm</Text></Button>
          </div>

          <Button>
            <Text modifiers={["uppercase"]}>Tìm kiếm</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
