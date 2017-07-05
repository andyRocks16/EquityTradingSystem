import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="navbar-fixed-top">
                    <nav>
                        <div>
                            <ul className="drop_menu">
                                <li><a>Home</a></li>
                                <li><a>Market Information</a></li>
                                <li><a>About Us</a></li>
                                <li className="pull-right" id="logo"><a href='#'><b>MONEY TREE CORP.</b></a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}