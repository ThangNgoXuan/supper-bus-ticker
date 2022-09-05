import * as yup from "yup";
import { SIZE_1MB_DEFAULT, SUPPORTED_FORMATS } from "./constant";

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const contactUsSchema = yup.object({
  name: yup.string().required("Vui lòng nhập tên"),
  title: yup.string().required("Vui lòng tiêu đề"),
  content: yup.string().required("Vui lòng nhập nội dung"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  email: yup
    .string()
    .email("Địa chỉ email không hợp lệ")
    .max(255, "Nhập tối đa 255 ký tự")
    .required("Vui lòng nhập email"),
});

export const jobDetail = yup.object({
  name: yup.string().required("Vui lòng nhập tên"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  position: yup.string().required("Vui lòng nhập vị trí ứng tuyển"),
  email: yup
    .string()
    .email("Địa chỉ email không hợp lệ")
    .max(255, "Nhập tối đa 255 ký tự")
    .required("Vui lòng nhập email"),
  file: yup
    .mixed()
    .required("Vui lòng chọn tệp đính kèm")
    .test("file", "Định dạng không được hỗ trợ", (files) => {
      if (files) {
        return SUPPORTED_FORMATS.includes(files.type);
      }
      return true;
    })
    .test("file", "Tệp tin quá lớn", (files) => {
      if (files) {
        return files.size <= SIZE_1MB_DEFAULT;
      }
      return true;
    }),
});

export const booking = yup.object({
  name: yup.string().required("Vui lòng nhập tên"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  email: yup
    .string()
    .email("Địa chỉ email không hợp lệ")
    .max(255, "Nhập tối đa 255 ký tự")
    .required("Vui lòng nhập email"),
});

export default contactUsSchema;
