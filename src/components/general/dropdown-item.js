import { useEffect, useState } from "react";
import React from "react";
const DropdownItem = (props) => {
    const { onChange, marked , label, id } = props;
const [checkedValue, setChecked]= useState(marked);
    useEffect(() => {
        if(checkedValue !==marked && onChange){
            onChange(checkedValue)
        }
    }, [marked, checkedValue])
    return (
        <li className="flex flex-row items-center">
            <div className="flex items-center">
                <input id={`${id}`}  type="checkbox"   checked={checkedValue} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" onChange={(e) =>
                    setChecked(e.target.checked)} />
                <label  id={`${id}`} className="ml-2">{label}</label>
            </div>

        </li>
    )
}
export default DropdownItem