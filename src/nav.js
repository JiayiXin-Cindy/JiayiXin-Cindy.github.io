import React from 'react';
import './nav.css';

const Nav = () => {
    return <div className="nav">
            
    <div className="left-col">
        <div className="nav-link">
            <a href="/">Home</a>
        </div>
        
        <div className="nav-link">
            <a href="/landscapes">Landscapes</a>
        </div>

        <div className="nav-link">
            <a href="/portraits">Portraits</a>
        </div>

        <div className="nav-link">
            <a href="/snippets">Snippets</a>
        </div>

        <div className="nav-link">
            <a href="/comics">Comics</a>
        </div>

        <div className="nav-link">
            <a href="/about">About Me</a>
        </div>
    </div>
    
    <div className="right-col">
        <div className="brand">
            <div>CINDY XIN</div>
        </div>
    </div>
</div>;
}

export default Nav;