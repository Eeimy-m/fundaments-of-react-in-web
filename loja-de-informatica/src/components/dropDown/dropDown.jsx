import React from "react";
import './dropDown.css';

const dropDown = (label, name, options, onChange) => {

    return (
        <div className="dropDown">

            <label>{label}</label>

            <select name="name" onChange={onChange}>
                <option value="">Selecione</option>

                {options.map((item,index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}

            </select>

        </div>
    )
}

export default dropDown;