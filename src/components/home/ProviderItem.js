import React from "react"
const ProviderItem = (props) => {
    const {details, onSelect}=props
    return (
        <div className="items-center justify-center w-full flex  min-w-[10rem] cursor-pointer" onClick={onSelect}>
            <div
                className="carousel-item border relative snap-start py-2 px-4 items-center justify-center w-full" 
            >
                <img src={details.url} alt={details.url} className="hover:scale-125 transition duration-700 ease-in-out" />

            </div>
        </div>

    )
}
export default ProviderItem