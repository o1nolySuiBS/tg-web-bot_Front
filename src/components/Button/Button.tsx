import React from 'react';

// @ts-ignore
const Button = (props) => {
    return (
        <div>
            <button {...props} className={'button '+props.className} />
        </div>
    );
};

export default Button;