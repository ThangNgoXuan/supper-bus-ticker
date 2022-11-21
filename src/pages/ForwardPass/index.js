import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Link from '../../components/atoms/Link';
import Text from '../../components/atoms/Text';
import { forwardPass } from '../../utils/schema';

export default function ForwardPass() {
  const placeholder = {
    email: "Vui lòng nhập Email",
    button: "Lấy mã",
  };

  const method = useForm({
    resolver: yupResolver(forwardPass ),
    defaultValues: {
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
              Quên mật khẩu
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
        <div className="p-login_left_link">
            <Link href='/dang-nhap'>Quay lại đăng nhập</Link>
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
  )
}
