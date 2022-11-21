import React, { useEffect, useState } from "react";
import Text from "../../atoms/Text";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Select from "react-select";
import useValues from "../../../hooks/useValues";
import routesApi from "../../../api/routesApi";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function HeroBanner() {
  const [startDate, setStartDate] = useState(new Date());
  const [values, setValues] = useValues({
    selectedOption: "",
  });
  console.log(moment(startDate).format("DD/MM/YYYY"));

  function handleChange(selectedOption) {
    setValues({ selectedOption });
  }

  useEffect(() => {
    routesApi.getClientRoutes().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="o-heroBanner">
      <div className="o-heroBanner_content">
        <Text modifiers={["white", "600", "32x48"]}>
          Tìm kiếm vé xe với BusTicket
        </Text>
        <div className="o-heroBanner_search">
          <Select
            value={values.selectedOption}
            onChange={handleChange}
            options={options}
          />
          <Select
            value={values.selectedOption}
            onChange={handleChange}
            options={options}
          />
          <div>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <Button>
            <Text modifiers={["uppercase"]}>Tìm kiếm</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
