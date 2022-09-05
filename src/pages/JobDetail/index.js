import React from "react";
import Text from "../../components/atoms/Text";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import UploadFile from "../../components/molecules/UploadFile";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactUsSchema from "../../utils/schema";

const jobDetail = {
  title: "SPX - Hub Team Leader - Hanoi",
  description: `* To support Hub Supervisor in managing daily operations activities.
  <br/>* To support in recruiting, managing, arranging shifts for rider, staff, and BPO at hub(s).
  <br/>* To monitor performance KPIs and take actions if needed to reach company target.
  <br/>* Ensure parcels are delivered and received at the right destination within lead time according to SOP(s).
  <br/>* To solve day-to-day operational issues: lost, damaged parcels, customer claims, other issues regarding to pick-up, delivery or return, etc.
  <br/>* To weekly report to hub supervisor.
  <br/>* Other tasks as assigned by hub supervisor.`,
  required: `* College degree or above (all major are accepted).
  <br /> *Have at least 1-year experience in operations at equivalent positions, especially first mile and last mile.
  <br /> *Excellent problem-solving skills and leadership qualities.
  <br /> *Good knowledge about local routes.
  <br /> *High sense of responsibility, ability to work in fast - moving industry, can-do spirit.
  <br /> *Good communication skills.
  <br /> *Good at Microsoft Office, preferred to be good analytical skills.`,
};

const placeholder = {
  name: "Vui lòng nhập tên",
  phone: "Vui lòng nhập số điện thoại",
  email: "Vui lòng nhập email",
  level: "Số năm kinh nghiệm",
};

export default function JobDetail() {
  const method = useForm({
    resolver: yupResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      content: "",
      title: "",
    },
  });

  return (
    <div className="p-jobDetail">
      <div className="p-jobDetail_title">
        <Text modifiers={["600", "jet", "32x48"]}>{jobDetail.title}</Text>
      </div>
      <div className="p-jobDetail_description">
        <Text modifiers={["raisinBlack", "22x32", "600"]}>Mô tả công việc</Text>
        <Text modifiers={["400", "gray"]} content={jobDetail.description} />
      </div>
      <div className="p-jobDetail_required">
        <Text modifiers={["raisinBlack", "22x32", "600"]}>Yêu cầu</Text>
        <Text modifiers={["400", "gray"]} content={jobDetail.required} />
      </div>
      <div className="p-jobDetail_recruitment">
        <div className="p-jobDetail_recruitment_span" />
        <Text modifiers={["32x48", "coolBlack", "600"]}>Ứng tuyển ngay</Text>
        <div className="p-jobDetail_recruitment_span" />
      </div>
      <div className="p-jobDetail_formWrap">
        <FormProvider {...method}>
          <form className="p-jobDetail_formWrap_form">
            <div className="p-jobDetail_formWrap_field">
              <Input placeholder={placeholder.name} type="text" />
              <Input placeholder={placeholder.email} type="email" />
            </div>
            <div className="p-jobDetail_formWrap_field">
              <Input placeholder={placeholder.phone} type="number" />
              <Input placeholder={placeholder.level} type="number" />
            </div>
            <div className="p-jobDetail_formWrap_upload">
              <UploadFile />
            </div>
            <div className="p-jobDetail_formWrap_button">
              <Button>
                <Text modifiers={["white", "600", "22x32", "uppercase"]}>
                  Ứng tuyển ngay
                </Text>
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
