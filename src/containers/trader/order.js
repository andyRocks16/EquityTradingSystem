import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep';
import ContentRefresh from 'material-ui/svg-icons/action/autorenew';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import PopUpComponent from '../components/Utilities/PopUpComponent';
import Data from '../data';
import { BootstrapTable } from 'react-bootstrap-table';
import { orderUrl } from '../app.config';
import css from 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import moment from 'moment';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
  }

 
  expandComponent(row) {
    return (
      <div id="myModal" role="dialog">
        <div className="modal-dialog">


          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Details</h4>
            </div>
            <div className="modal-body">
              <p>Id :{row.id}</p>
              <p>Creation Time : {row.creationTime}</p>
              <p>Side : {row.side}</p>
              <p>Symbol : {row.symbol}</p>
              <p>Quantity : {row.quantity}</p>
              <p>Placed : {row.quantityPlaced}</p>
              <p>Executed : {row.quantityExecuted}</p>
              <p>Limit Price : {row.limitPrice}</p>
              <p>Priority : {row.priority}</p>
              <p>Status : {row.status}</p>
              <p>Trader : {row.traderId}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }

  render() {
   

    if (typeof this.props.loginId.id == "undefined") {
      return (<div>
        <h1>PLEASE LOGIN</h1>
        <br />
        <h3>click <Link to="/"><a href="">here</a></Link></h3>
      </div>)
    }
    return (
      <PageBase title="Orders" >
        <div >
        </div>
      </PageBase>
    )
  };

}





export default Orders;
