import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header_icon">
                <h1>Common sense media</h1>
            </div>
            <div className="header_icon">
                <input type="" placeholder="find movies, 
                books, and more ..."></input>
                <SearchIcon/>
            </div>
        </div>
    )
}

export default Header
