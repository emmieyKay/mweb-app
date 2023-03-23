import React, { Fragment, useEffect, useState } from "react"
import ProductItem from "./products/product-item"
import { campaignsURL, providerInfo } from "../static/data"
import ProductFilters from "./products/product-filters"
import Header from "./general/Header"
const HomePage = (props) => {
    const [campaigns, setCampaigns] = useState([])
    const [selectedCampaign, selectCampaign] = useState({})
    const [summarizedProducts, setSummarizedProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(campaignsURL)
                    .then((response) => response.json())
                    .then((data) => {
                        setCampaigns(data.campaigns)
                    })
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])


    return (<Fragment>

        <div className="min-h-screen max-w-screen p-8 2xl:container 2xl:mx-auto overflow-hidden">
            <div className="w-full flex flex-col">
                <Header/>
                <ProductFilters providers={providerInfo} campaigns={campaigns} onFiltersChanged={(values) => {
                    setSummarizedProducts(values.selectedProducts)
                    selectCampaign(values.selectedCampaign)
                }} />
                <div className="w-full grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {summarizedProducts.map((product, index) => {
                        return <ProductItem key={index} product={product} campaign={selectedCampaign} />
                    })

                    }
                </div>

            </div>


        </div>

    </Fragment>)
}

export default HomePage