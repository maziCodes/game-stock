import React from "react";

const StockHeader = (props) => {

    return (

        <div className="header-stock">
            <img alt="" className="stock-img" src={require('./../../../assets/sword.png')}/>
            <span>{props.title}</span>
            <span>{props.subTitle}</span>
        </div>
    )
}

export default StockHeader