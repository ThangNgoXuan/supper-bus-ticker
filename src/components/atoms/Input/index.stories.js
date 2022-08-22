import React from "react";
import Input from '.';

export default {
    title: 'Component/atoms/Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: 'text',
        },
        error: {
            control: 'text',
        },
        label: {
            control: 'text',
        },
        type: {
            control: 'select',
            options: ['text', 'number', 'email', 'password']
        }
    },
}

export const Primary = ({placeholder, error, label, type}) => <Input placeholder={placeholder} error={error} label={label} type={type}/>