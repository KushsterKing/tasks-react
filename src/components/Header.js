import React from 'react'

function Header() {
    return (
        <div>
            <nav className="nav">
                <div className="nav-left">
                    <a className="brand" href="#">
                        Tasks App
                    </a>
                </div>
                <div className="nav-right">
                    <div className="tabs">
                        <a href="https://www.linkedin.com/in/kush-gumber">Task Management App by Kush</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;