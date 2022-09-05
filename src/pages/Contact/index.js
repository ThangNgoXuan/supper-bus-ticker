import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Text from "../../components/atoms/Text";
import Image from "../../components/atoms/Image";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import TextArea from "../../components/atoms/TextArea";
import contactUsSchema from "../../utils/schema";
import emailjs from "@emailjs/browser";

const title = "Liên hệ với Bus-ticket chúng tôi";
const description = "Liên hệ với Bus-ticket chúng tôi";
const content = {
  map: "https://picsum.photos/500",
  title: "Khóa luận tốt nghiệp Bus Ticket",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the`,
};

const placeholder = {
  name: "Họ và tên",
  phone: "Số điện thoại",
  title: "Tiêu đề",
  email: "Email",
  content: "Nội dung",
  button: "Gửi liên hệ",
};

export default function Contact() {

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

  const sendEmail = (formData) => {
    alert("Gửi thành công");
    emailjs
      .send(
        "service_a6l4f9j",
        "template_djn6p03",
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
    <div className="p-contact">
      <div className="p-contact_title">
        <Text modifiers={["center", "30x32", "coolBlack", "600", "uppercase"]}>
          {title}
        </Text>
      </div>
      <div className="p-contact_description">
        <Text modifiers={["400", "16x24", "center"]}>{description}</Text>
      </div>
      <div className="p-contact_contentWrap">
        <div className="p-contact_contentWrap_left">
          <Image imgSrc={content.map} />
          <div className="p-contact_information">
            <div className="p-contact_information_title">
              <Text
                modifiers={["24x30", "coolBlack", "400", "uppercase"]}
                content={content.title}
              />
            </div>
            <div className="p-contact_information_description">
              <Text
                content={content.description}
                modifiers={["400", "16x24"]}
              />
            </div>
          </div>
        </div>
        <div className="p-contact_contentWrap_right">
          <FormProvider {...method}>
            <form
              className="p-contact_form"
              onSubmit={method.handleSubmit(sendEmail)}
              noValidate
            >
              <Text modifiers={["24x30", "coolBlack", "600", "left"]}>
                Gửi thông tin liên hệ
              </Text>
              <div className="p-contact_form_field">
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
              </div>
              <div className="p-contact_form_field">
                <Controller
                  name="email"
                  control={method.control}
                  render={({ field, fieldState }) => (
                    <Input
                      placeholder={placeholder.email}
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                    />
                  )}
                />
                <Controller
                  name="title"
                  control={method.control}
                  render={({ field, fieldState }) => (
                    <Input
                      placeholder={placeholder.title}
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                    />
                  )}
                />
              </div>
              <div className="p-contact_form_fieldTextArea">
                <Controller
                  name="content"
                  control={method.control}
                  render={({ field, fieldState }) => (
                    <TextArea
                      rows={4}
                      placeholder={placeholder?.content}
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                    />
                  )}
                />
              </div>
              <div className="p-contact_form_button">
                <Button type="submit">
                  <Text modifiers={["white", "uppercase"]}>
                    {placeholder.button}
                  </Text>
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
