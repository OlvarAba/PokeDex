import React from "react";

const Button = ({label, onclick}) => {
    return (
        <button 
        className="btn btn-soft btn-primary btn-sm"
        onclick={onclick}
        >
        {label}
        </button>
    )
}

export default Button