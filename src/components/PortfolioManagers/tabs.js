import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export class Tabs extends React.Component {
    render() {
        return (
            <div>
                <nav id="nav-pane">
                    <div className="container-fluid">
                        <ul className="nav nav-pills">
                            <li className="active"><Link to={`/pm_dashboard`}><a href="#">Portfolio</a></Link></li>
                            <li><Link to={`/pm_order`}><a >Order List</a></Link></li>
                            <li><Link to={`/pm_drafts`}><a >Draft </a></Link></li>
                            <li className="pull-right"><a >Sign Out</a></li>
                        </ul>
                    </div>
                </nav>
            </div >
        );
    }
}