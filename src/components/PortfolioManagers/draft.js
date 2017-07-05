import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from './tabs.js';

export class Drafts extends React.Component {

    constructor(props) {
        super(props);
    }

    giveID(dId, dCri) {
        console.log(dCri+dId);
        return dCri + dId;
    }

    componentWillMount() {
        var tempId = this.props.userInfo[0].message[0].data;
        this.props.getDrafts("http://localhost:8081/getDrafts/" + tempId);
    }

    render() {
        var drafts;
        var $this = this;
        if (typeof this.props.drafts !== 'undefined' && this.props.drafts.length > 0) {
            drafts = this.props.drafts.map(function (d) {
                return (
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">

                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" data-target={$this.giveID.bind($this, d.id, "#collapse")}>+ {d.share_name} DRAFT </a>
                                </h4>
                            </div>

                            <div id={$this.giveID.bind($this, d.id, "collapse")} className="panel-collapse collapse out">
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

                                        <button type="submit" className="btn btn-default btn-danger btn-sm pull-right" > Delete Order </button>
                                        <button type="submit" className="btn btn-primary btn-sm btn-default pull-right" > Edit Order </button>

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
                                                                    <input type="text " name="price_amount " id="price_amount " className="form-control " />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div>
                                                            <div className="row ">
                                                                <div className="col-md-4 ">
                                                                    <div className="form-group ">
                                                                        <label htmlFor="quantity " className="control-label ">Quantity</label>
                                                                        <input type="text " className="form-control " id="quantity " placeholder="Quantity " />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 ">
                                                                    <div className="form-group form-group-sm ">
                                                                        <label htmlFor="side " className="control-label ">Side</label>
                                                                        <select className="form-control " id="side ">
                                                                            <option value="buy ">BUY</option>
                                                                            <option value="sell ">SELL</option>
                                                                        </select>
                                                                    </div>
                                                                </div>



                                                                <div className="col-md-4 ">
                                                                    <label htmlFor="total " className="control-label ">Total </label>
                                                                    <input type="text " className="form-control " id="total " placeholder="Total Investment " />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className="col-md-4 ">
                                                                <label htmlFor="trader " className="control-label ">Assign To</label>
                                                                <select className="form-control " id="trader " >
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4 ">
                                                                <label htmlFor="stop_loss " className="control-label ">Stop Loss </label>
                                                                <input type="text " className="form-control " id="stop_loss " placeholder="Stop Loss " />
                                                            </div>

                                                            <div className="row ">
                                                                <div className="col-xs-12 pull-right ">


                                                                    <button type="submit " className="btn btn-success pull-right " >Submit</button>
                                                                    <button type="submit " className="btn btn-danger pull-right ">Cancel</button>



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

            </div >
        );
    }
}