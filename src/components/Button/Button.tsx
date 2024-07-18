import React from 'react';
import './Button.css'


// @ts-ignore
const Button = (props) => {
    return (
            <button {...props} className={'button '+props.className} />
    );
};

export default Button;