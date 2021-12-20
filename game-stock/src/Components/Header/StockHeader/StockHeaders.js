import React from "react";
import StockHeader from "./StockHeader";

const StockHeaders = (props) => {
    const stocks = [];

    for (let index = 0; index < 8; index++) {
        stocks.push({
            title: 'Adurite Antlers',
            subTitle: 'Sold for $49.00'
        })
        
    }

    const stockHeaders = stocks.map((item, i) => {
        return <StockHeader {...item} key={i}/>
    })
    return (
            <div className="header-stocks-container">
                {stockHeaders}
            </div>
    )
}

export default StockHeaders;