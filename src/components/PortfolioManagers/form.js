import React from 'react';
import ReactDOM from 'react-dom';

export class Form extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading text-success">Money Tree Login</h2>
                    <input type="text" className="form-control" name="username" placeholder="Username" required="" autofocus="" />
                    <input type="password" className="form-control" name="password" placeholder="Password" required="" />
                    <select className="form-control">
                        <option value="" selected disabled>Login As</option>
                        <option value="PM">Portfolio Manager</option>
                        <option value="ET">Equity Trader</option>
                        <option value="broker">Broker</option>
                    </select>
                    <div className="pull-right">
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember Me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button> </form>
            </div>
        );
    }
}