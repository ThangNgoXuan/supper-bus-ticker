import React from "react";
import Text from "../../components/atoms/Text";
import Image from "../../components/atoms/Image";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import TextArea from "../../components/atoms/TextArea";

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
  return (
    <div className="p-contact">
      <div className="p-contact_title">
        <Text modifiers={["center", "30x32", "coolBlack", "600", 'uppercase']}>
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
              <Text modifiers={['24x30', 'coolBlack', '400', 'uppercase']} content={content.title} />
            </div>
            <div className="p-contact_information_description">
              <Text content={content.description} modifiers={['400', '16x24']}/>
            </div>
          </div>
        </div>
        <div className="p-contact_contentWrap_right">
          <form className="p-contact_form">
            <Text modifiers={['24x30', 'coolBlack', '600', 'left']}>Gửi thông tin liên hệ</Text>
            <div className="p-contact_form_field">
              <Input placeholder={placeholder.name} />
              <Input placeholder={placeholder.phone} />
            </div>
            <div className="p-contact_form_field">
              <Input placeholder={placeholder.email} />
              <Input placeholder={placeholder.title} />
            </div>
            <div className="p-contact_form_fieldTextArea">
              <TextArea placeholder={placeholder.content} rows={4} />
            </div>
            <div className="p-contact_form_button">
              <Button type="submit">
                <Text modifiers={["white", "uppercase"]}>
                  {placeholder.button}
                </Text>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
