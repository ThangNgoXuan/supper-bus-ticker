import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Link from "../../components/atoms/Link";
import Text from "../../components/atoms/Text";
import { login } from "../../utils/schema";

export default function Login() {
  const placeholder = {
    password: "Mật khẩu",
    email: "Email",
    button: "Đăng nhập",
  };

  const method = useForm({
    resolver: yupResolver(login),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const submitForm = (data) => {
    console.log('data',data);
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
            <Text modifiers={["24x30", "coolBlack", "600", "center"]}>
              Đăng nhập
            </Text>
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
            </div>
            <div className="p-contact_form_field">
              <Controller
                name="password"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={placeholder.password}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
        <div className="p-login_left_link">
            <Link href='/dang-ki'>Đăng kí</Link>
            <Link href='/quen-mat-khau'>Quên mật khẩu?</Link>
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
