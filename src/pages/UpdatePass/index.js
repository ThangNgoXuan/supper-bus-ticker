import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Link from "../../components/atoms/Link";
import Text from "../../components/atoms/Text";
import { updatePass } from "../../utils/schema";

export default function UpdatePass() {
  const placeholder = {
    password: "Mật khẩu",
    otp: "Mã xác nhận",
    passwordConfim: "Nhập lại mật khẩu",
    button: "Xác thực",
  };

  const method = useForm({
    resolver: yupResolver(updatePass),
    defaultValues: {
      otp: "",
      password: "",
      passwordConfim: "",
    },
  });

  const submitForm = (data) => {
    console.log("data", data);
  };
  return (
    <div className="p-login">
      <div className="p-login_left">
        <FormProvider {...method}>
          <form
            className="p-contact_form"
            onSubmit={method.handleSubmit(submitForm)}
            noValidate
          >
            <Text modifiers={["24x30", "coolBlack", "600", "left"]}>
              Xác thực mật khẩu
            </Text>
            <div className="p-contact_form_field">
              <Controller
                name="otp"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={placeholder.otp}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            <div className="p-contact_form_field">
              <Controller
                name="password"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    type="password"
                    placeholder={placeholder.password}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className="p-contact_form_field">
              <Controller
                name="passwordConfim"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    type="password"
                    placeholder={placeholder.passwordConfim}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
            <div className="p-login_left_link">
              <Link href="/dang-nhap">Quay lại đăng nhập</Link>
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
      <div className="p-login_right"></div>
    </div>
  );
}
