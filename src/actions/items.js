import axios from 'axios';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function loginSuccess(user) {
    return {
        type: 'LOGIN_SUCCESS',
        user
    };
}

export function tradersFetchDataSuccess(traders) {
    return {
        type: 'TRADERS',
        traders
    };
}

export function shareSuccess(shares) {
    return {
        type: 'SHARES_SUCCESS',
        shares
    };
}

export function shareFail(shares) {
    return {
        type: 'SHARES_FAIL'
    };
}

export function updateShare(action, share) {
    return {
        type: 'SHARE',
        action, share
    };
}

export function pendingOrderSuccess(orders){
    return {
        type: 'PENDING_ORDERS',
        orders
    };
}

export function orderSubmitSuccess(orderData){
    return {
        type: 'SUBMIT_ORDERS',
        orderData
    };
}

export function draftsDataSuccess(drafts){
    return {
        type: 'DRAFTS',
        drafts
    };
}

export function removeShare(){
    return {
        type: 'SHARE_REMOVE'
        
    };
}


export function getDrafts(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        console.log(url)
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(draftsDataSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function getTraders(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(tradersFetchDataSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}


export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(itemsFetchDataSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function loginUser(url, data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        return axios({
            url: url,
            timeout: 20000,
            method: 'post',
            data,
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(loginSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function searchShares(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(shareSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function getOrders(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(pendingOrderSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function submitOrder(url, data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        return axios({
            url: url,
            timeout: 20000,
            method: 'post',
            data,
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                return dispatch(orderSubmitSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}


export function saveDraft(url, data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        console.log(data)
        return axios({
            url: url,
            timeout: 20000,
            method: 'post',
            data,
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                console.log(items)
                return true;
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function delDraft(url, data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        console.log(data)
        return axios({
            url: url,
            timeout: 20000,
            method: 'post',
            data,
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                console.log(items)
                return dispatch(draftsDataSuccess(items))
                
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function logout(url, data) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        console.log(data)
        return axios({
            url: url,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => response.data)
            .then((items) => {
                //  dispatch(updateSearch(items))
                console.log(items)
                return true;
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
