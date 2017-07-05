import { combineReducers } from 'redux';
import {userInfo, drafts, shares, shareName, traders, pendingOrders, orderData} from './items';

export default combineReducers({
    userInfo,
    shares,
    shareName,
    traders,
    orderData,
    drafts,
    pendingOrders
});
