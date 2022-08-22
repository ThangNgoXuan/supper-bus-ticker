import React, { useState, useRef } from "react";
import PropTypes, {number, string} from 'prop-types';
import Text from '../../atoms/Text';
import { BiDownArrow } from 'react-icons/bi';
import mapModifiers from "../../../utils/functions";
import useClickOutside from "../../../hooks/useClickOutSide";

const ListDataPulldown = {
    id: string | number,
    name: string,
    value: string,
}

const Pulldown = ({ placeholder, noData, listData, label, value, onSelect }) => {
    const [open, setOpen] = useState(false);
    const optionRef = useRef(null);

    const handleOpen = () => {
        setOpen(!open);
    }

    const clickOuside = () => {
        setOpen(false);
    }

    useClickOutside(optionRef, clickOuside);


    return (
        <div className="m-pulldown">
            {
                label && (
                    <div className="m-pulldown_label">
                        <Text modifiers={['16x24', '300', 'arsenic']}>
                            {label}
                        </Text>
                    </div>
                )
            }
            <div className="m-pulldown_headerWrap" onClick={handleOpen} ref={optionRef}>
                <div className="m-pulldown_headerWrap_title">
                    <Text modifiers={['16x24', '300', 'arsenic']}>
                        {value ? value.value : placeholder}
                    </Text>
                </div>
                <div className={mapModifiers("m-pulldown_headerWrap_iconWrap", open && 'open')}>
                    <BiDownArrow />
                </div>
            </div>
            <ul className={mapModifiers("m-pulldown_optionWrap", open && 'open')}>
                {
                    listData ? (
                        listData.map((item, index) => (
                            <li 
                                className={mapModifiers("m-pulldown_optionWrap_item", value?.id === item.id && 'choose')}
                                key={`list-item-option-${index}`}
                                onClick={() => {
                                    setOpen(false)
                                    onSelect(item)
                                }}
                            >
                                <Text modifiers={['16x24', 'arsenic', '400']}>{item.value}</Text>
                            </li>
                        )))
                        : (<li className="m-pulldown_optionWrap_item"><Text modifiers={['16x24', 'arsenic', '400']}>{noData}</Text></li>)
                }
            </ul>
        </div>
    )
}

export default Pulldown;


Pulldown.prototype = {
    placeholder: PropTypes.string,
    listData: PropTypes.objectOf(ListDataPulldown),
    noData: PropTypes.string,
    value: PropTypes.objectOf(ListDataPulldown),
    onSelect: PropTypes.func,
}

Pulldown.defaultProps = {
    placeholder: 'Choos Option ...',
    noData: 'No Option',

}


