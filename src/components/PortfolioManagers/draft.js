import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from './tabs.js';

export class Drafts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: [],
            total: "0"
        }
    }

    getId(idCri, id) {
        console.log(idCri + id);
        return idCri + id;
    }

    updateValue(price) {
        var quantity = ReactDOM.findDOMNode(this.refs.quantity).value;
        var total_price = parseInt(quantity) * parseInt(price);
        this.setState({ total: total_price })
    }

    componentWillMount() {
        var ids = [];
        var length = this.props.drafts.length;
        for (var i = 0; i < length; i++) {
            ids.push(this.getId("collapse", i));
        }
        this.setState({ id: ids })
        var tempId = this.props.userInfo.credentials[0].data;
        this.props.getDrafts("http://localhost:8081/getDrafts/" + tempId);
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
        ReactDOM.findDOMNode(this.refs.quantity).value = "";
        ReactDOM.findDOMNode(this.refs.amt).value = "";
        ReactDOM.findDOMNode(this.refs.total).value = "";
        ReactDOM.findDOMNode(this.refs.stop_price).value = "";
        ReactDOM.findDOMNode(this.refs.trader).value = "";
        this.props.removeShare();
    }

    submitOrder() {
        var tempId = this.props.userInfo.credentials[0].data;
        var data = this.orderData();
        this.props.submitOrder("http://localhost:8081/giveOrder/" + tempId, data);
        this.cancelOrder();
    }

    delDraft(id) {
        var tempId = this.props.userInfo.credentials[0].data;
        this.props.delDraft("http://localhost:8081/delDraft/" + tempId, {id});
    }

    render() {
        var traders;
        if (typeof this.props.traders !== 'undefined' && this.props.traders.length > 0) {
            traders = this.props.traders.map(function (trader) {
                return (
                    <option value={trader.id}>{trader.first_name} {trader.last_name}</option>
                );
            });
        };
        var i = 0;
        var $this = this;
        var drafts;
        var $this = this;
        if (typeof this.props.drafts !== 'undefined' && this.props.drafts.length > 0) {
            drafts = this.props.drafts.map(function (d) {
                return (

                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">

                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" data-target={"#" + $this.state.id[i]}>+ {d.share_name} DRAFT </a>
                                </h4>
                            </div>

                            <div id={$this.state.id[i++]} className="panel-collapse collapse out">
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Share name</th>
                                                    <th>Quantity</th>
                                                    <th>Date of creation</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>

                                            <tr>
                                                <td>{d.share_name}</td>
                                                <td>{d.quantity}</td>
                                                <td>{d.timestamp}</td>
                                                <td>{d.price}</td>
                                            </tr>


                                        </table>
                                    </div>
                                    <div>

                                        <button type="button" onClick={$this.delDraft.bind($this, d.ID)} className="btn btn-default btn-danger btn-sm pull-right" > Delete Order </button>

                                        <div className="panel-group">
                                            <div className="panel">

                                                <div className="panel-heading">
                                                    <div className="panel-title">
                                                    </div>
                                                </div>

                                                <div className="panel draft_form">
                                                    <div className="panel-body">
                                                        <div className="row">


                                                            <div className="col-md-4">
                                                                <div className="form-group form-group-sm">
                                                                    <center>
                                                                        <h2>{d.share_name} </h2>
                                                                    </center>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="col-md-6 ">
                                                                    <label>Price Type</label>
                                                                    <select className="form-control " id="price ">

                                                                        <option value="Current ">Current Price</option>
                                                                        <option value="Limit ">Limit Price</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-6 ">
                                                                    <label>Price :</label>
                                                                    <input ref="amt" type="text " name="price_amount " id="price_amount " className="form-control " />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div>
                                                            <div className="row ">
                                                                <div className="col-md-4 ">
                                                                    <div className="form-group ">
                                                                        <label htmlFor="quantity " className="control-label ">Quantity</label>
                                                                        <input type="text " onChange={$this.updateValue.bind($this)} ref="quantity" className="form-control " id="quantity " placeholder="Quantity " />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 ">
                                                                    <div className="form-group form-group-sm ">
                                                                        <label htmlFor="side " className="control-label ">Side</label>
                                                                        <select className="form-control " ref="side" id="side ">
                                                                            <option value="buy ">BUY</option>
                                                                            <option value="sell ">SELL</option>
                                                                        </select>
                                                                    </div>
                                                                </div>



                                                                <div className="col-md-4 ">
                                                                    <label htmlFor="total " className="control-label ">Total </label>
                                                                    <input type="text " value={$this.state.total}  className="form-control " id="total " placeholder="Total Investment " />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className="col-md-4 ">
                                                                <label htmlFor="trader " className="control-label ">Assign To</label>
                                                                <select className="form-control " id="trader " ref="trader">
                                                                    <option value="" selected disabled>Select Trader</option>
                                                                    {traders}
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4 ">
                                                                <label htmlFor="stop_loss " className="control-label ">Stop Loss </label>
                                                                <input type="text " ref="stop_price" className="form-control " id="stop_loss " placeholder="Stop Loss " />
                                                            </div>

                                                            <div className="row ">
                                                                <div className="col-xs-12 pull-right ">


                                                                    <button type="button" onClick={$this.submitOrder.bind($this)} className="btn btn-success pull-right " >Submit</button>



                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        return (
            <div>
                <section className="container well">
                    <section className="container draft_page">

                        <div className="container-fluid">
                            <Tabs />
                        </div>
                        <hr />
                        <section className="content container-fluid ">

                            <h3 className="draft_title"> View Saved Drafts </h3>
                            {drafts}
                        </section>

                    </section >
                </section>
            </div >

        );
    }
}