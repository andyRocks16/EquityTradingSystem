import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from './tabs.js';
// import { Search } from './search.js';

export class ETDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    createBlocks(orderid) {
        var tempid = this.props.userInfo.credentials[0].data;
        this.props.createBlocks("http://localhost:8081/buildBlocks/" + tempid, { id: orderid })
    }

    componentWillMount() {
        var ids = [];
        var length = this.props.userInfo.orderHistory.length;
        var length1 = this.props.userInfo.orderPending.length;
        for (var i = 0; i < length + length1; i++) {
            ids.push(this.getId("collapse", i));
        }
        this.setState({ id: ids });
        var tempid = this.props.userInfo.credentials[0].data;
        this.props.getBlocks("http://localhost:8081/getBuildBlocks/" + tempid)
    }

    getId(idCri, id) {
        return idCri + id;
    }

    render() {
        var $this = this;
        var i = 0;
        var orderPending, blocks;
        if (typeof this.props.userInfo.orderPending !== 'undefined' && this.props.userInfo.orderPending.length > 0) {
            orderPending = this.props.userInfo.orderHistory.map(function (item) {
                return (

                    <div className="panel-body">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accord" data-target={"#" + $this.state.id[i]}>{item.placerData.first_name} {item.placerData.last_name}</a>
                        </h4>
                        <div className="table-responsive" id={$this.state.id[i++]}>
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <th>Order ID</th>
                                    <th>Order Quantity</th>
                                    <th>Symbol</th>
                                    <th>Side</th>
                                    <th>Portfolio ID</th>
                                    <th>Share ID</th>
                                    <th>Price</th>
                                    <th>Timestamp</th>
                                    <th>Action</th>

                                </thead>
                                <tbody>

                                    {item.ordersGiven.map(function (order) {
                                        return (
                                            <tr>
                                                <td>{order.id}</td>
                                                <td>{order.total_quantity}</td>
                                                <td>{order.symbol}</td>
                                                <td>{order.side}</td>
                                                <td>{order.pm_id}</td>
                                                <td>{order.share_id}</td>
                                                <td>{order.current_price}</td>
                                                <td>{order.timestamp}</td>
                                                <td><button value=" Blocks" onClick={$this.createBlocks.bind($this, order.id)}>Create</button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })

        }
        if (typeof this.props.blocks !== 'undefined' && this.props.blocks.length > 0) {
            blocks = this.props.blocks.map(function (block) {
                return (
                    <tr>
                        <td>{block.id}</td>
                        <td>{block.block_quantity}</td>
                        <td>{block.symbol}</td>
                        <td>{block.side}</td>
                        <td>{block.broker_id}</td>
                        <td>{block.status}</td>
                        <td>{block.price}</td>
                        <td>{block.timestamp}</td>
                    </tr>
                );
            });
        };
        return (
            <section className="container well">
                <Tabs />
                <hr />
                <section className="content  ">
                    <div className="row">
                        <section id="searchBar" className="container-fluid col-xs-12 col-sm-12 col-md-6">
                            <label htmlFor="search-shares" className="search">Search Order: </label>
                            <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6" placeholder="Search" id="search-shares" />
                        </section>
                        <section id="searchAdditional" className="container-fluid col-xs-6 col-sm-6 col-md-3">
                            <label htmlFor="searchBy" className="search">Type </label>
                            <select className="form-control" name="searchBy" id="searchBy">
                                <option value="Buy">Buy</option>
                                <option value="Sell">Sell</option>
                            </select>
                        </section>
                        <section id="filterAdditional" className="container-fluid col-xs-6 col-sm-6 col-md-3">
                            <label htmlFor="sortBy" className="sort">Sort By </label>
                            <select className="form-control" name="sortBy" id="sort">
                                <option value="name">Name</option>
                                <option value="date">Date</option>
                            </select>
                        </section>
                    </div>
                    <br/>
                    <div>
                        <button type="button" className="btn btn-primary btn-sm pull-right">
                            <span className="glyphicon glyphicon-search"></span> Search
                        </button>
                    </div>
                </section>
                <br />
                <br />
                
                <hr />


                <div className="panel-group" id="accordion1">
                    <div className="panel panel-default ">
                        <div className=" panel-heading ">
                            <h4 className="panel-title ">
                                <a data-toggle="collapse" data-target="#collapse11">+Current Trade</a>
                            </h4>
                        </div>
                        <div id="collapse11" className="panel-collapse collapse out">
                            {orderPending}
                        </div>
                    </div>
                </div>
                <hr className="hr_draft" />
                <div className="panel-group" id="accordion5363">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-target="#collapse14">+Blocks</a>
                            </h4>
                        </div>
                        <div id="collapse14" className="panel-collapse collapse out">
                            <div>
                                <div className="panel-body ">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <th>Order ID</th>
                                                <th>Block Quantity</th>
                                                <th>Symbol</th>
                                                <th>Side</th>
                                                <th>Broker ID</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th>Timestamp</th>

                                            </thead>
                                            <tbody>
                                                {blocks}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button " className="btn btn-primary btn-sm pull-right execute_btn ">
                        Execute Order
                    </button>
                </div>

            </section >
        );
    }
}