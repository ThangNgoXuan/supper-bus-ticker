import React from "react";
import Image from ".";

export default {
    title: 'Component/atoms/Image',
    component: Image,
    argTypes: {
        ratio: {
            control: 'select',
            options: ['1x1', '4x3', '16x9']
        }
    }
}

export const Primary = ({ratio}) =>
    <div style={{
        maxWidth: '300px',
    }}>
        <Image ratio={ratio} />
    </div>