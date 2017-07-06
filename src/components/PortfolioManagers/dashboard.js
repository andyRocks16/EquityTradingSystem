import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from './tabs.js';
import { Search } from './search.js';

export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: "0"
        }
    }

    updateValue() {
        var quantity = ReactDOM.findDOMNode(this.refs.quantity).value;
        var total_price = parseInt(quantity) * parseInt(this.props.shareName.share_price);
        this.setState({ total: total_price })
    }

    componentWillMount() {
        var tempId = this.props.userInfo[0].message[0].data;
        this.props.getTraders("http://localhost:8081/getTraders");
        this.props.getOrders("http://localhost:8081/getPendingOrders/" + tempId)
    }

    componentDidMount() {
        var tempId = this.props.userInfo[0].message[0].data;        
        this.props.getOrders("http://localhost:8081/getPendingOrders/" + tempId)
    }

    orderData() {
        var quantity = ReactDOM.findDOMNode(this.refs.quantity).value;
        var amt = ReactDOM.findDOMNode(this.refs.amt).value;
        var symbol = ReactDOM.findDOMNode(this.refs.symbol).value;
        var stop_price = ReactDOM.findDOMNode(this.refs.stop_price).value;
        var trader = ReactDOM.findDOMNode(this.refs.trader).value;
        return {
            et_id: trader,
            share_id: this.props.shareName.ID,
            limit_price: "0",
            current_price: this.props.shareName.share_price,
            stop_price,
            total_quantity: quantity,
            side: symbol
        }
    }

    cancelOrder() {

    }

    submitOrder() {
        var tempId = this.props.userInfo[0].message[0].data;
        var data = this.orderData();
        console.log(data);
        this.props.submitOrder("http://localhost:8081/giveOrder/" + tempId, data);
    }

    saveDraftOrder() {
        var data = orderData();
    }

    render() {
        console.log(this.props.pendingOrders)
        var traders, orders;
        if (typeof this.props.traders !== 'undefined' && this.props.traders.length > 0) {
            traders = this.props.traders.map(function (trader) {
                return (
                    <option value={trader.id}>{trader.first_name} {trader.last_name}</option>
                );
            });
        };
        if (typeof this.props.pendingOrders !== 'undefined' && this.props.pendingOrders.length > 0) {
            orders = this.props.pendingOrders.map(function (x) {
                return (
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.share_name}</td>
                        <td>{x.current_price}</td>
                        <td>{x.total_quantity}</td>
                        <td>{x.total_quantity * x.current_price}</td>
                        <td>{x.side}</td>
                    </tr>
                );
            });
        };
        return (
            <div>

                <section className="container well">
                    <Tabs />
                    <hr />
                    <Search {...this.props} />

                    <hr />
                    <section>
                        <div>
                            <h2>{this.props.shareName.share_name}</h2>
                            <form>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group form-group-sm">
                                            <label htmlFor="symbol" className="control-label">Symbol</label>
                                            <select className="form-control" id="symbol" ref="symbol">
                                                <option value="" selected disabled>Select Exchange</option>
                                                <option value="NSE">NSE</option>
                                                <option value="BSE">BSE</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="quantity" className="control-label">Quantity</label>
                                            <input onChange={this.updateValue.bind(this)} ref="quantity" type="text" className="form-control" id="quantity" placeholder="Quantity" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="price_amount" className="control-label">Price</label>
                                            <input ref="amt" type="text" name="price_amount" value={this.props.shareName ? this.props.shareName.share_price : ""} id="price_amount" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="total" className="control-label">Total </label>
                                        <input value={this.state.total} type="text" className="form-control" id="total" placeholder="Total Investment" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="stop_loss" className="control-label">Stop Loss </label>
                                        <input ref="stop_price" type="text" className="form-control" id="stop_loss" placeholder="Stop Loss" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="trader" className="control-label">Assign To</label>
                                        <select className="form-control" id="trader" ref="trader">
                                            <option value="" selected disabled>Select Trader</option>
                                            {traders}
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col-xs-12 pull-right ">
                                        <div className="col-xs-12 pull-right ">
                                            <button type="button" className="btn btn-success pull-right" onClick={this.submitOrder.bind(this)}>Submit</button>
                                            <button type="button" className="btn btn-warning pull-right" onClick={this.saveDraftOrder.bind(this)}>Save Draft</button>
                                            <button type="button" className="btn btn-danger pull-right" onClick={this.cancelOrder.bind(this)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <hr />
                    <div className="row"> 
                    <div className="container-fluid col-xs-12 col-sm-12 col-md-12">
                        <div className="panel-group" id="accordion">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse1">Current Trade</a>
                                    </h4>
                                </div>
                                <div id="collapse1" className="panel-collapse collapse ">
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <th>Company</th>
                                                        <th>Current Price</th>
                                                        <th>Quantity</th>
                                                        <th>Investment</th>
                                                        {/*<th>Overall Gain</th>
                                                        <th>Latest Value</th>*/}
                                                        <th>Action</th>
                                                    </tr>
                                                    {orders}
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

            </div >
        );
    }
}