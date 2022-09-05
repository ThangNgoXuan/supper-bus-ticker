import React from "react";
import Text from "../../components/atoms/Text";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import UploadFile from "../../components/molecules/UploadFile";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { jobDetail as jobDetailSchema } from "../../utils/schema";
import emailjs from "@emailjs/browser";

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
  name: "Họ và tên (*)",
  phone: "Số điện thoại (*)",
  email: "Email (*)",
  position: "Vị trí ứng tuyển (*)",
};

export default function JobDetail() {

  const method = useForm({
    resolver: yupResolver(jobDetailSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
    },
  });

  const sendEmail = (formData) => {
    alert("Gửi thành công");
    console.log(formData);
    emailjs
      .send(
        "service_a6l4f9j",
        "template_f89c9e7",
        formData,
        "poDKqMlfNxjT2hrmm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    method.reset();
  };

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
          <form
            className="p-jobDetail_formWrap_form"
            onSubmit={method.handleSubmit(sendEmail)}
            noValidate
          >
            <div className="p-jobDetail_formWrap_field">
              <Controller
                name="name"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={placeholder.name}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />

              <Controller
                name="email"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={placeholder.email}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                    type="email"
                  />
                )}
              />
            </div>
            <div className="p-jobDetail_formWrap_field">
              <Controller
                name="phone"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={placeholder.phone}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                    type="number"
                  />
                )}
              />
              <Controller
                name="position"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={placeholder.position}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                    type="text"
                  />
                )}
              />
            </div>
            <div className="p-jobDetail_formWrap_upload">
              <Controller
                name="file"
                control={method.control}
                render={({ field, fieldState }) => (
                  <UploadFile
                    id="file"
                    name="file"
                    title="TẬP TIN ĐÍNH KÈM: (không quá 1Mb)"
                    error={fieldState.error?.message}
                    handleRemove={() => field.onChange(null)}
                    handleChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        field.onChange(e.target.files[0]);
                      }
                      e.target.value = "";
                    }}
                  />
                )}
              />
            </div>
            <div className="p-jobDetail_formWrap_button">
              <Button type="submit">
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
