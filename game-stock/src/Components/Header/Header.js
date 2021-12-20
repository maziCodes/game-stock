import React from "react";
import HeaderButton from "./HeaderButton";
import StockHeaders from "./StockHeader/StockHeaders";

const Header = (props) => {
    return (
       <header>
           <HeaderButton/>
           <StockHeaders />
       </header>
    )
}

export default Header;