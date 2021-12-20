import React from "react"

const NavBar = (props) => {
   
        return (
            <nav>
            <div className="logo">
                {/* <img alt=""> */}
                <span>RP</span>
            </div>
            <div className="nav-menu">
                <div className="nav-menu-list">
                    <ul>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Discord</li>
                        <li>Support</li>
                        <li>Sponsorship</li>
                        <li>History</li>
                        <li>Transactions</li>
                        <li>Settings</li>
                        <li>My Shop</li>
                        <li>Admin Panel</li>
                    </ul>
                    <button>Logout</button>

                </div>
            </div>

        </nav>
        )
}

export default NavBar;