import React from "react";
import {BiTime, BiMoney} from 'react-icons/bi';
import {MdDateRange} from 'react-icons/md';
import Link from "../../components/atoms/Link";
import Text from "../../components/atoms/Text";
import HeroBanner from "../../components/organisms/HeroBanner";

const title = "Các việc làm đang tuyển";
const total = "Vị trí đang tuyển";
const dataJob = new Array(10).fill({
  nameJob: "Công việc số 1",
  time: "30/08/2022",
  salary: "8",
  position: "Ho Chi Minh",
  link: '/cong-viec-chi-tiet',
});

export default function Recruit() {
  return (
    <>
    <HeroBanner />
    <div className="p-recruit">
      <div className="p-recruit_header">
        <div className="p-recruit_header_title">
          <Text modifiers={["32x48", "coolBlack", "600"]}>{title}</Text>
        </div>
        <div className="p-recruit_header_total">
          <Text modifiers={["22x52", '600']}>{`${dataJob.length} ${total}`}</Text>
        </div>
      </div>
      <div className="p-recruit_jobList">
          {dataJob &&
            dataJob.length > 0 &&
            dataJob.map((item, index) => (
              <Link href={item.link}>
                <div
                className="p-recruit_jobList_jobItem"
                key={`item-job-${index.toString()}`}
              >
                <div className="p-recruit_jobItem_title">
                  <Text modifiers={['22x32']}>{item.nameJob}</Text>
                </div>
                <div className="p-recruit_jobItem_content">
                  <div className="p-recruit_jobItem">
                    <BiTime/>
                    <Text modifiers={['gray']}>{item.time}</Text>
                  </div>
                  <div className="p-recruit_jobItem">
                    <BiMoney />
                    <Text modifiers={['gray']}>{item.salary} Triệu</Text>
                  </div>
                  <div className="p-recruit_jobItem">
                    <MdDateRange/>
                    <Text modifiers={['gray']}>{item.time}</Text>
                  </div>
                </div>
              </div>
              </Link>
            ))}
        </div>
    </div>
    </>
  );
}
