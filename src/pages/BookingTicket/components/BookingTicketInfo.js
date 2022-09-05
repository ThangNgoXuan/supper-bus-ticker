import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../../../components/atoms/Button';
import Text from '../../../components/atoms/Text';
import { booking } from '../../../utils/schema';

export default function BookingTicketInfo() {
    const [indexActive, setIndexActive] = useState(0);

    const handleSubmit = (data) => {
    console.log(data);
    alert("Gửi thành công");
  };

  const method = useForm({
    resolver: yupResolver(booking),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  return (
    <>
      <div className="p-bookingTicket_info">
        <div className="p-bookingTicket_info_form">
          <FormProvider {...method}>
            <form
              className="p-bookingTicket_form"
              onSubmit={method.handleSubmit(handleSubmit)}
            >
              {/* <Controller
                name="name"
                control={method.control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={placeholder.name}
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                    type="text"
                    label="Họ tên *"
                  />
                )}
              /> */}
              <div className="p-bookingTicket_form_field">
                {/* <Controller
                  name="phone"
                  control={method.control}
                  render={({ field, fieldState }) => (
                    <Input
                      placeholder={placeholder.phone}
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      type="number"
                      label="Số điện thoại"
                    />
                  )}
                /> */}
              </div>
              <div className="p-bookingTicket_form_field">
                {/* <Controller
                  name="email"
                  control={method.control}
                  render={({ field, fieldState }) => (
                    <Input
                      placeholder={placeholder.email}
                      value={field.value}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      type="email"
                      label="Email *"
                    />
                  )}
                /> */}
              </div>
              <div className="p-bookingTicket_form_field">
                <input type="checkbox" />
                <Text>Chấp nhận các điều khoản đặt vé của BusTicket</Text>
              </div>
              <Button type="submit">Gửi</Button>
            </form>
          </FormProvider>
        </div>
        <div className="p-bookingTicket_info_rules">
          <Text modifiers={["center", "coolBlack", "600", "uppercase"]}>
            Điều khoản & Lưu ý
          </Text>
          <ul className="p-bookingTicket_info_rules_ul">
            <li className="p-bookingTicket_info_rules_li">
              <Text>
                (*) Quý khách vui lòng mang email có chứa mã vé đến văn phòng để
                đổi vé lên xe trước giờ xuất bến ít nhất
              </Text>
            </li>
            <li className="p-bookingTicket_info_rules_li">
              <Text>
                (*) Quý khách vui lòng mang email có chứa mã vé đến văn phòng để
                đổi vé lên xe trước giờ xuất bến ít nhất
              </Text>
            </li>
            <li className="p-bookingTicket_info_rules_li">
              <Text>
                (*) Quý khách vui lòng mang email có chứa mã vé đến văn phòng để
                đổi vé lên xe trước giờ xuất bến ít nhất
              </Text>
            </li>
            <li className="p-bookingTicket_info_rules_li">
              <Text>
                (*) Quý khách vui lòng mang email có chứa mã vé đến văn phòng để
                đổi vé lên xe trước giờ xuất bến ít nhất
              </Text>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-bookingTicket_route_button">
        <Button handleClick={() => setIndexActive(indexActive - 1)}>
          Quay lại
        </Button>
        <Button handleClick={() => setIndexActive(indexActive + 1)}>
          Phía trước
        </Button>
      </div>
    </>
  );
};
