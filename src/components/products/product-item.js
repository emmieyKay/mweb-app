import React from "react";
const ProductListItem = (props) => {
    const {product, campaign}=props
    const calculateInternetSpeed = (value) => {
        //divide the data transfer rate value by 1000 return value to the nearest 5
        return `${Math.round(parseInt(value) / 1000 / 10) * 10}Mbps`
    }
    return (<div className="bg-white dark:bg-slate-800 
    rounded px-4 py-6 ring-1 ring-slate-900/5 shadow-sm w-full flex flex-col justify-between 
    min-h-[186px] border p-4 hover:shadow-xl " >
        <div className="flex justify-between mb-7">
            <section>
                <h1 className="text-semi-dark text-lg text-left font-bold z-50">{product.productName}</h1>
                <p className="subtext-gray text-base  text-left">{product.isThrottled}</p>
                <p className="subtext-gray text-base text-left">{campaign.name}</p>
            </section>
            <div className="w-36 flex justify-between space-x-4">
                <section className="flex flex-col items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="svg-inline--fa fa-arrow-down h-4 mb-1 subtext-gray" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"></path>
                    </svg>
                    <div className="text-light text-sm font-bold">Download</div>
                    <p className="subtext-gray text-md">{`${calculateInternetSpeed(product.downloadSpeed)}`}</p>
                </section>
                <section className="flex flex-col items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" className="svg-inline--fa fa-arrow-up h-4 mb-1 subtext-gray" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z">
                        </path>
                    </svg>
                    <div className="text-light text-sm font-bold">Upload</div>
                    <p className="subtext-gray text-md">{`${calculateInternetSpeed(product.uploadSpeed)}`}</p></section>
            </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
            <section className="outline-none mt-1">
                <span className="text-2xl laptop:text-3xl font-bold text-dark">{`R${product.productRate}pm`}</span>
            </section>
            <section className="outline-none relative w-28 h-12">
                <span>
                    <img alt="logo" src={product.providerImage ? product.providerImage : ""} />
                </span></section>
            <section className="outline-none">
                <button className="w-36 transition-all duration-500 bg-gradient-to-r from-danger-550 to-danger-950  text-white transition duration-1000 hover:bg-danger-950 text-sm focus:outline-none shadow-lg">
                    <div className="block hover:no-underline transition duration-1000 hover:bg-danger-950  py-2 px-4">Check Coverage</div>
                </button>
            </section>
        </div>
    </div>
    )
}
export default ProductListItem