import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export class Tabs extends React.Component {

    constructor(props){
        super(props);
    }

    logout(){
        var temp = this.props.userInfo.credentials[0].data;
        this.props.logout("http://localhost:8081/logout" + temp)
    }

    render() {
        return (
            <div>
                <nav id="nav-pane">
                    <div className="container-fluid">
                        <ul className="nav nav-pills">
                            <li className="active"><Link to={`/pm_dashboard`}><a className="white" href="#">Portfolio</a></Link></li>
                            <li><Link to={`/pm_order`}><a className="white" >Order List</a></Link></li>
                            <li><Link to={`/pm_drafts`}><a className="white">Draft </a></Link></li>
                            <li className="pull-right"><Link to={`/`}><a className="white" onClick={this.logout.bind(this)}>Sign Out</a></Link></li>
                        </ul>
                    </div>
                </nav>
            </div >
        );
    }
}