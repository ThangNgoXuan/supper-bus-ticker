import React from "react";
import Button from ".";

export default {
    title: 'Component/atoms/Button',
    component: Button,
    argTypes:{
        disable: {
            control: 'boolean',
        },
        children: {
            control: 'text',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary']
        },
        size: {
            control: 'select',
            options: ['xs', 'lg']
        },
    }
}


export const Primary = ({disable, children, variant, size}) => <Button disabled={disable} modifies={[variant, size]}>{children}</Button>