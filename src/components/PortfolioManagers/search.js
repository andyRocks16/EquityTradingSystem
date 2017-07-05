import React from 'react';
import ReactDOM from 'react-dom';

export class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    searchShares() {
        var searchString = ReactDOM.findDOMNode(this.refs.searchString).value;
        if (searchString == " " || searchString == "") {
            this.props.shareFail();
            return;
        }
        this.props.searchShares("http://localhost:8081/searchShares/" + searchString)
    }

    purchase(action, share) {
        this.props.updateShare(action, share);
        this.props.shareFail();
    }

    render() {
        const styles = {
            imageStyle: {
                width: "65px",
                height: "35px"
            }
        }

        var shares;
        var $this = this;
        if (typeof this.props.shares !== 'undefined' && this.props.shares.length > 0) {
            shares = this.props.shares.map(function (share) {
                return (
                    <li className="list-group-item col-xs-12">
                        <div className="pull-left"><img style={styles.imageStyle} src={share.image} /> <a href="">{share.share_name}</a> </div>
                        <div className="pull-right">
                            <button className="btn btn-success" onClick={$this.purchase.bind($this, "BUY", share)} >BUY</button>
                            <button className="btn btn-danger" onClick={$this.purchase.bind($this, "SELL", share)}>SELL</button>
                        </div>
                    </li>
                );
            });
        };
        return (
            <div>
                <div className="row">
                    <section id="searchBar" className="container-fluid col-xs-12 col-sm-12 col-md-12">
                        <label htmlFor="search-shares" className="search">Search Order: </label>
                        <input ref="searchString" type="text" onChange={this.searchShares.bind(this)} className="form-control col-xs-12 col-sm-12 col-md-6" placeholder="Search" id="search-shares" />

                        <ul className="list-group ">
                            {shares}
                        </ul>

                    </section>

                    {/*<section id="searchAdditional" className="container-fluid col-xs-6 col-sm-6 col-md-3">
                        <label htmlFor="searchBy" className="search">Search By: </label>
                        <select className="form-control" name="searchBy" id="searchBy">
                            <option value="Buy">Name</option>
                            <option value="Sell">Trader Manager</option>
                        </select>
                    </section>

                    <section id="filterAdditional" className="container-fluid col-xs-6 col-sm-6 col-md-3">
                        <label htmlFor="searchBy" className="search">Filter By: </label>
                        <div className="form-group">
                            <div>
                                <input type='date' className="form-control" />
                            </div>
                        </div>
                    </section>*/}

                </div>
            </div>
        );
    }
}