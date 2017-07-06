import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from './tabs.js';
import { Search } from './search.js';

export class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id : []
        }
    }

    componentWillMount(){
        var ids = [];
        var length = this.props.userInfo.orderHistory.length ;
        var length1 =  this.props.userInfo.orderPending.length;
        for(var i = 0; i < length+length1 ; i++){
            ids.push(this.getId("collapse" , i));
        }
        this.setState({id : ids})
    }

    getId(idCri, id){
        console.log(idCri + id);
        return idCri + id;
    }

    render() {
        const styles = {
            accStyle: {
                cursor: "pointer"
            }
        }
        var $this = this;
        var i=0;
        var orderHistory, orderPending;
        if (typeof this.props.userInfo.orderHistory !== 'undefined' && this.props.userInfo.orderHistory.length > 0) {
            orderHistory = this.props.userInfo.orderHistory.map(function (item) {
                return (

                    <div className="panel-body">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accord" data-target={"#" + $this.state.id[i]}>{item.placerData.first_name} {item.placerData.last_name}</a>
                        </h4>
                        <div className="table-responsive" id={$this.state.id[i++]}>
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <th>PM ID</th>
                                    <th>Order ID</th>
                                    <th>Stock Name</th>
                                    <th>Symbol</th>
                                    <th>Side</th>
                                    <th>Quantity</th>
                                    <th>Investment</th>
                                    <th>Date</th>
                                    <th>Status</th>


                                </thead>
                                <tbody>
                                    {item.ordersGiven.map(function (data) {
                                        return (<tr>
                                            <td>{ data.pm_id }</td>
                                            <td>{ data.id }</td>
                                            <td>{ data.share_name }</td>
                                            <td>{ data.symbol }</td>
                                            <td>{ data.side }</td>
                                            <td>{ data.quantity }</td>
                                            <td>{ data.price }</td>
                                            <td>{ data.timestamp }</td>
                                            <td>Completed</td>

                                        </tr>);
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })

        }
        
        if (typeof this.props.userInfo.orderPending !== 'undefined' && this.props.userInfo.orderPending.length > 0) {
            orderPending = this.props.userInfo.orderPending.map(function (item) {
                return (

                    <div className="panel-body">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accord" data-target={"#" + $this.state.id[i]}>{item.placerData.first_name} {item.placerData.last_name}</a>
                        </h4>
                        <div className="table-responsive" id={$this.state.id[i++]}>
                            <table className="table table-hover table-bordered">
                                <thead>
                                    <th>PM ID</th>
                                    <th>Order ID</th>
                                    <th>Stock Name</th>
                                    <th>Symbol</th>
                                    <th>Side</th>
                                    <th>Quantity</th>
                                    <th>Investment</th>
                                    <th>Date</th>
                                    <th>Status</th>


                                </thead>
                                <tbody>
                                    {item.ordersGiven.map(function (data) {
                                        return (<tr>
                                            <td>{ data.pm_id }</td>
                                            <td>{ data.id }</td>
                                            <td>{ data.share_name }</td>
                                            <td>{ data.symbol }</td>
                                            <td>{ data.side }</td>
                                            <td>{ data.quantity }</td>
                                            <td>{ data.price }</td>
                                            <td>{ data.timestamp }</td>
                                            <td>Completed</td>

                                        </tr>);
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })

        }
        return (
            <section className="cotainer well">
                <div className="row">
                    <Tabs />
                    <div>
                        <div className="col-md-12">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title" style={styles.accStyle}>
                                            <a data-toggle="collapse" data-parent="#accordion" data-target="#collapse11">Order History</a>
                                        </h4>
                                    </div>
                                    <div id="collapse11" className="panel-collapse collapse out ">
                                        {orderHistory}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="panel-group" id="accordion1">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title" style={styles.accStyle}>
                                            <a data-toggle="collapse" data-parent="#accordion1" data-target="#collapse12">Order Book</a>
                                        </h4>
                                    </div>
                                    <div id="collapse12" className="panel-collapse collapse ">
                                        {orderPending}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        );
    }
}