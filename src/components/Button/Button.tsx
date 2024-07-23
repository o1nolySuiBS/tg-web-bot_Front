import React from 'react';
import './Button.css'


// @ts-ignore
const Button = (props) => {
    return (
            <button {...props} className={'button '+props.className} />
    );
};//кнопка 11.2.1111

export default Button;