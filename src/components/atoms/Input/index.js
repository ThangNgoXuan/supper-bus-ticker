import React, { forwardRef } from "react";
import PropTypes from 'prop-types';
import mapModifiers from "../../../utils/functions";
import Text from "../Text";

const Type = ['email', 'text', 'number']


const InputRef = ({error, type, placeholder, id, label, value, modifiers, handleSubmit}) => {
    return (
        <div className={mapModifiers("a-input", modifiers, error && 'error')}>
            {
                label && (
                    <div className="a-input_label">
                        <label htmlFor={id}>
                            <Text>{label}</Text>
                        </label>
                    </div>
                )
            }
            <div className="a-input_wrap">
                <input 
                    type={type}
                    value={value}
                    placeholder={placeholder}    
                    className='a-input_input'
                    id={id}
                />
            </div>
            {
                error && (
                    <div className="a-input_messageError">
                        <Text>error</Text>
                    </div>
                )
            }
        </div>
    )

}


const Input = forwardRef(InputRef);

Input.prototype = {
    placeholder: PropTypes.string,
    error: PropTypes.string,

};
  
Input.defaultProps = {

};