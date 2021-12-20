import React from "react";
import Stock from "./Stock";

const Stocks = (props) => {
    const data = [];

    for (let index = 0; index < 14; index++) {
        data.push({
            title: 'Valkyrie Helmet',
            subTitle: '160.7k+',
            amount: '$540'
        })
        
    }

    const stocksData = data.map((item, i) => {
        console.log(item);
        return <Stock {...item} key={i}/>
    })

return (

        <div className="stock-grid">
               {stocksData}

            </div> 
        )
}

export default Stocks;