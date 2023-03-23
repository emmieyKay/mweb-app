import React, { Fragment, useEffect, useState } from "react"
import { priceRanges } from "../../static/data"
import { baseURL } from "../../static/data"
import DropdownItem from "../general/dropdown-item"

const ProductFilters = (props) => {
    const { campaigns, onFiltersChanged } = props
    const [selectedCampaign, selectCampaign] = useState(campaigns ? campaigns[0] : null)
    const [providers, setProviders] = useState([])
    const [selectedPriceRanges, setPriceRanges] = useState([])
    const [summarizedProducts, setSummarizedProducts] = useState([])
    const [selectedProviders, selectProviders] = useState([])
    // Change campaign value
    function setCampaign(value) {

        // Reset selected providers
        selectProviders([])

        // Select new campaign
        selectCampaign(value)

    }
    // 
    const setFilterProviders = (checked, value) => {
        const selected = checked ? [...selectedProviders, value] : selectedProviders.filter(e => e !== value)
        selectProviders(selected)
        console.log(selected)
    }
    const togglePrices = (checked, value) => {
        const selected = checked ? [...selectedPriceRanges, value] : selectedPriceRanges.filter(e => e !== value)
        setPriceRanges(selected)
    }

    useEffect(() => {
        if (campaigns?.length > 0 && !selectedCampaign) {
            setCampaign(campaigns[0])
        }
    }, [props])


    useEffect(() => {
        // filter products by infrastructure provider
        const selectedProviderSet = new Set(selectedProviders)
        let selectedProducts = summarizedProducts.filter(p => selectedProviderSet.has(p.provider))

        // filter products by price range
        selectedProducts = selectedProducts.filter(filterByPriceRanges)

        // sort by price from lowest to highest
        selectedProducts = selectedProducts.sort((pa, pb) => pa.productRate - pb.productRate)

        onFiltersChanged({ selectedProducts, selectedCampaign })

    }, [selectedProviders, selectedPriceRanges])


    useEffect(() => {
        if (selectedCampaign && selectedCampaign?.promocodes?.length > 0) {
            getProducts()
        }

    }, [selectedCampaign])
    // Get products by selected campaigns promo code
    const getProducts = async () => {
        const response = await fetch(`${baseURL}/marketing/products/promos/${selectedCampaign.promocodes.join(',')}?sellable_online=true`)
            .then((response) => response.json())
        if (!response.error) {
            const data = response;
            const selectedProducts = data.reduce((prods, pc) => [...prods, ...getProductsFromPromo(pc)], [])
            const providersList = [...new Set(selectedProducts.map(p => p.provider))]

            // Reset selected product details
            setSummarizedProducts(selectedProducts);

            // Reset list of providers in dropdown
            setProviders(providersList);

            // Reset selected providers to select only the first element of list should be checked
            selectProviders([providersList[0]]);
        } else {
            console.log("error====>", response);
        }
    };
    // function to get products from promo code
    const getProductsFromPromo = (pc) => {
        return pc.products.reduce((prods, p) => [...prods, getSummarizedProduct(p)], [])
    }

    // function to create an object that only includes necessary fields and returns necessary fields.
    const getSummarizedProduct = ({ productCode, friendlyName, productRate, subcategory, parameters }) => {
        const provider = subcategory.replace('Uncapped', '').replace('Capped', '').trim()
        const paramObject = parameters.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.value }), {})
        const providerImage = (props.providers.find(e => e.name === provider)?.url)
        return {
            productCode,
            productName: friendlyName, productRate,
            provider, isThrottled: paramObject.isThrottled,
            downloadSpeed: paramObject.downloadSpeed.replace('KBPS', '').trim(),
            uploadSpeed: paramObject.uploadSpeed.replace('KBPS', '').trim(),
            providerImage
        }
    }

    const filterByPriceRanges = (product) => {
        // If no price range has been selected then include all products
        if (selectedPriceRanges.length === 0) {
            return true
        }

        for (const range of selectedPriceRanges) {
            const price = product.productRate
            if (price >= range.min && price <= range.max) {
                return true
            }
        }

        return false
    }
    return (
        <div className="flex flex-col mb-5">

            <div className="flex md:flex-row flex-col justify-between items-start">
                <div className="md:w-1/2 items-center w-full  items-center flex flex-row mb-4 space-x-2">
                    {campaigns?.map((item, i) => {
                        return <button key={i}
                            className={`px-2 text-center md:w-[150px] w-full h-[46px] border-2 shadow-sm border-blue-900 font-bold text-md  
                transition ease-in-out hover:scale-110 duration-300 
                ${selectedCampaign?.code === item.code ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`}
                            onClick={() => setCampaign(item)}>{item.name}</button>

                    })}
                </div>
                <div className="md:w-1/2 w-full flex md:flex-row flex-col justify-start items-start md:space-x-4">
                    <div className="dropdown w-full mb-4">
                        <button className="border  w-full f-16 font-medium px-5 py-2 text-center flex justify-between items-center" type="button">
                            <span>Providers</span>
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        <div className="dropdown-content w-full">
                            {providers.map((item, index) => {
                                const checkExists = selectedProviders.find(provider => provider === item)
                              
                                return (<DropdownItem  onChange={(e) => setFilterProviders(e, item)} marked={checkExists ? true : false} label={item} key={index} id={`${item}`} />)
                            
                            })}
                        </div>
                    </div>
                    <div className="dropdown w-full mb-4">
                        <button className="border  w-full f-16 font-medium px-5 py-2 text-center flex justify-between items-center" type="button">
                            <span>Price range</span>
                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                        <div className="dropdown-content w-full">
                            {priceRanges.map((item, index) => {
                                return (<DropdownItem onChange={(e)=> togglePrices(e, item)}  label={item.label} key={index} id={`${item.label}`} />)
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default ProductFilters