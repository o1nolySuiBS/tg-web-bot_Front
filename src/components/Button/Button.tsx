import React from 'react';
import './Button.css'


// @ts-ignore
const Button = (props) => {
    return (
        <div>
            <button {...props} className={'button '+props.className} />
        </div>
    );
};

export default Button;