import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
// import rootReducer from '../reducers/index';

import { loginUser, createBlocks, getBlocks, loginSuccess, logout, delDraft, removeShare, saveDraft, getDrafts, searchShares, shareFail, updateShare, getTraders, getOrders, submitOrder } from '../actions/items';
import App from '../containers/App';
import '../styles/index.css';
import '../styles/header_footer.css';
import '../styles/trader.css';
import '../styles/pm_order.css';
// import styles from '../styles'
// import  '../styles.scss';
// import  '../styles/common.css';

const mapStateToProps = (state) => {

    return {
        userInfo: state.userInfo,
        shares: state.shares,
        shareName: state.shareName,
        traders: state.traders,
        drafts: state.drafts,
        pendingOrders: state.pendingOrders,
        orderData: state.orderData,
        blocks: state.blocks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // login: (url, data) => dispatch(loginUser(url, data)),
        login: (data) => dispatch(loginSuccess(data)),        
        searchShares: (url) => dispatch(searchShares(url)),
        shareFail: () => dispatch(shareFail()),
        updateShare: (action, share) => dispatch(updateShare(action, share)),
        getTraders: (url) => dispatch(getTraders(url)),
        getOrders: (url) => dispatch(getOrders(url)),
        submitOrder: (url, data) => dispatch(submitOrder(url, data)),
        getDrafts: (url) => dispatch(getDrafts(url)),
        saveDraft: (url, data) => dispatch(saveDraft(url, data)),
        removeShare: () => dispatch(removeShare()),
        logout: (url) => dispatch(logout()),
        delDraft: (url, data) => dispatch(delDraft(url, data)),
        getBlocks: (url) => dispatch(getBlocks(url)),
        createBlocks: (url, data) => dispatch(createBlocks(url, data))
    }
};

export var MainApp = connect(mapStateToProps, mapDispatchToProps)(App);



