import React from "react";
import { useState } from "react";
import Tabs, {TabPanel, Tab} from ".";

export default {
    title: 'Component/organisms/Tabs',
    component: Tabs,
}

const dummyData = [
    {
      id: '1',
      label: 'Lịch trình',
    },
    {
      id: '2',
      label: 'Xác nhận lộ trình',
    },
    {
      id: '3',
      label: 'Thông tin khách hàng',
    },
    {
        id: '4',
        label: 'Thanh toán',
    },
];

export const Primary = () => {
    const [indexActive, setIndexActive] = useState(0);
    return (
        <div>
        <Tabs variableMutate={indexActive}>
          {dummyData.map((item, index) => (
            <Tab
              key={`tab-${index.toString()}`}
              label={item.label}
              active={index === indexActive}
              handleClick={() => setIndexActive(index)}
              index={index + 1}
            />
          ))}
        </Tabs>
        {dummyData.map((item, index) => (
          <TabPanel key={`tab-panel-${index.toString()}`} active={index === indexActive}>
            {item.label}
          </TabPanel>
        ))}
      </div>
    )
}