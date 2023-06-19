import React from "react";
const Button = ({handleClick,label}) => {

    return (
    <input type="button"    value={label}  onClick = {handleClick}
    />
    );
};
export default Button;