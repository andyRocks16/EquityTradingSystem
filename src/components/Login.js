import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios' 

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    login() {
        var $this = this;
        var id = ReactDOM.findDOMNode(this.refs.id).value;
        var pwd = ReactDOM.findDOMNode(this.refs.pwd).value;
        var role = ReactDOM.findDOMNode(this.refs.role).value;
        var data = { id: id, password: pwd, access: role }
        axios.post("http://localhost:8081/loginData", data).then(function(data){
            $this.props.login(data.data);
            if(data.data.acess == "equity_trader"){
                console.log(data.acess, window.location.href)
                window.location.href = "http://localhost:3000/#/et_dashboard";
            } else if(data.data.acess == "portfolio_manager"){
                window.location.href = "http://localhost:3000/#/pm_dashboard";                
            }
        });
        // this.props.login("http://localhost:8081/loginData", data)
        // .then(function () {
        //     if (typeof $this.props.userInfo !== 'undefined' && $this.props.userInfo[0].access == $this.role) {
        //         window.location.href = "http://localhost:3000/pm_dashboard";
        //     }
        // });
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading text-success">Money Tree Login</h2>
                    <input type="text" ref="id" className="form-control" name="username" placeholder="Username" required="" autofocus="" />
                    <input type="password" ref="pwd" className="form-control" name="password" placeholder="Password" required="" />
                    <select className="form-control" ref="role">
                        <option value="" selected disabled>Login As</option>
                        <option value="PM">Portfolio Manager</option>
                        <option value="ET">Equity Trader</option>
                
                    </select>
                    <div className="pull-right">
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember Me
                        </label>
                    </div>
                        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login.bind(this)}>Login</button>
                </form>
            </div>
        );
    }
}