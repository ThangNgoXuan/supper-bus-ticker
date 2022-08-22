import React, { useState } from "react";
import Pulldown from ".";

export default {
    title: 'Component/molecules/Pulldown',
    component: Pulldown,
    argTypes: {
        placeholder: {
            control: 'text',
        },
        noData: {
            control: 'text',
        }, 
        label: {
            control: 'text',
        },
    }

}

const dataList = [
    { id: '1', name: '1', value: '1'},
    { id: '2', name: '2', value: '2'},
    { id: '3', name: '3', value: '3'},
    { id: '4', name: '4', value: '4'},
    { id: '5', name: '5', value: '5'},
    { id: '6', name: '6', value: '6'},
    { id: '7', name: '7', value: '7'},
];

const value = { id: '1', name: '1', value: 'option 1'};



export const Primary = ({placeholder, noData, label}) => 
{
    const [select, setSelect] = useState(value);
 return (
    <Pulldown 
        placeholder={placeholder} 
        noData={noData} 
        label={label} 
        listData={dataList} 
        value={select}
        onSelect={(value) => setSelect(value)}
    />
    )
}
