import React from "react";
import './dropDown.css';

const DropDown = ({label, name, options, onChange}) => {

    return (
        <div className="dropdown-container">

            <label>{label}</label>

            <select name={name} onChange={onChange}>
                <option value="">Selecione</option>

                {options && options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}

            </select>

        </div>
    )
}

export default DropDown;