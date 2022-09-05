import * as yup from "yup";

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const contactUsSchema = yup.object({
  name: yup.string().required("Vui lòng nhập tên"),
  title: yup.string().required("Vui lòng tiêu đề"),
  content: yup.string().required("Vui lòng nhập nội dung"),
  phone: yup
    .string()
    .required("Số điện thoại là bắt buộc")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ"),
  email: yup
    .string()
    .email("Địa chỉ email không hợp lệ")
    .max(255, "Nhập tối đa 255 ký tự")
    .required("Địa chỉ email là bắt buộc"),
  // file: yup
  //   .mixed()
  //   .required('Vui lòng chọn tệp đính kèm')
  //   .test('file', 'Định dạng không được hỗ trợ', (files) => {
  //     if (files) {
  //       return SUPPORTED_FORMATS.includes(files.type);
  //     }
  //     return true;
  //   })
  //   .test('file', 'Tệp tin quá lớn', (files) => {
  //     if (files) {
  //       return files.size <= SIZE_1MB_DEFAULT;
  //     }
  //     return true;
  //   }),
});

export default contactUsSchema;
