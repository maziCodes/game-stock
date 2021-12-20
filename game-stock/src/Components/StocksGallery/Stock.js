import React from "react";

const Stock = (props) => {

    return (
        <div className="stock">
            <div className="stock-img-container">
                <img alt="" className="stock-img" src={require('./../../assets/sword-shield.png')} />
            </div>
            <div className="stock-details">
                <div className="stock-name">
                    <span>{props.title}</span> 
                    <span> {props.subTitle}</span>
                </div>
                <button className="stock-btn brand-btn">{props.amount}</button>
            </div>

        </div>
    )
}

export default Stock