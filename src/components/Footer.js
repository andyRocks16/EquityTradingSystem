import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="navbar-fixed-bottom">
                    <div>
                        <nav className="navbar-fixed-bottom navbar-light bg-faded" >
                            <ul className="drop_menu">
                                <li>
                                    <a>Contact Us</a></li>
                                <li className="pull-right"><a className="disabled">© Copyright 2017, Money Tree Corporation</a></li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        );
    }
}