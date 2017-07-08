import moment from 'moment';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    let newOrder;
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            action.items.map((item, index) => {
                const date = item.creationTime;
                const formattedDate = moment(date).format('DD-MM-YY');
                item.creationTime = formattedDate;
            })
            return action.items;
        case 'DELETE_ORDER_SUCCESS':
            return [];
        case 'placementCreatedEvent':
            newOrder = [];
            for (let i = 0; i < action.orders.length; i++) {
                if (action.orders[i].id == action.newOrder.id) {
                    newOrder.push(action.newOrder)
                } else {
                    newOrder.push(action.orders[i]);
                }
            }
            return [...newOrder];
        case 'orderCreatedEvent':
            return [...action.orders, action.newOrder];
        case 'executionCreatedEvent':
            newOrder = [];
            for (let i = 0; i < action.orders.length; i++) {
                if (action.orders[i].id == action.newOrder.id) {
                    newOrder.push(action.newOrder);
                } else {
                    newOrder.push(action.orders[i]);
                }
            }
            return [...newOrder];
        case 'allOrdersDeletedEvent':
            return [];
        default:
            return state;
    }
}

export function stocks(state = [], action) {
    switch (action.type) {
        case 'STOCK_FETCH_DATA_SUCCESS':
            return action.stocks;
        default:
            return state;
    }
}


export function searchResults(state = [], actions) {
    let newOrder = [];
    switch (actions.type) {
        case 'UPDATE_SEARCH_DATA':
            actions.searchResults.map((item, index) => {
                if (item.id == actions.newOrder.id)
                    newOrder.push(actions.newOrder);
                else
                    newOrder.push(item);
            });
            return newOrder;
        case 'SEARCH_DATA_ID':
            console.log(actions)
            actions.items.map((item, index) => {
                if (item.id.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item);
                }
            })
            return newOrder;
        case 'SEARCH_DATA_SIDE':
            actions.items.map((item, index) => {
                if (item.side.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_SYMBOL':
            actions.items.map((item, index) => {
                if (item.symbol.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_QUANTITY':
            actions.items.map((item, index) => {
                if (item.quantity.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_PLACED':
            actions.items.map((item, index) => {
                if (item.quantityPlaced.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_EXECUTED':
            actions.items.map((item, index) => {
                if (item.quantityExecuted.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_LIMIT_PRICE':
            actions.items.map((item, index) => {
                if (item.limitPrice.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_PRIORITY':
            actions.items.map((item, index) => {
                if (item.priority.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_STATUS':
            actions.items.map((item, index) => {
                if (item.status.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_TRADER':
            actions.items.map((item, index) => {
                if (item.traderId.toString().indexOf(actions.key) != -1) {
                    newOrder.push(item)
                }
            })
            return newOrder;
        case 'SEARCH_DATA_':
            return actions.items;
        default:
            return state;
    }
}

export function orders(state = [], action) {
    let newOrder;
    switch (action.type) {
        case 'ORDER_PLACE_DATA_SUCCESS':
            newOrder = [];
            for (let i = 0; i < action.orders.length; i++) {
                newOrder.push(action.orders[i]);
            }
            return newOrder;
        default:
            return state;
    }
}



export function userInfo(state = [], action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log(action.user)
            return action.user;
        default:
            return state;
    }
}

export function shares(state = [], action) {
    switch (action.type) {
        case "SHARES_SUCCESS":
            return action.shares;
        case "SHARES_FAIL":
            return [];
        default:
            return state;
    }
}

export function shareName(state = [], action) {
    switch (action.type) {
        case "SHARE":
            var share = {
                ...action.share,
                method : action.action
            }
            return share;
        case "SHARE_REMOVE":
            return [];
        default:
            return state;
    }
}

export function traders(state = [], action) {
    switch (action.type) {
        case "TRADERS":
            return action.traders;
        default:
            return state;
    }
}


export function pendingOrders(state = [], action) {
    switch (action.type) {
        case "PENDING_ORDERS":
        console.log(action.orders.message, "returninf")
            return action.orders.message;
        default:
            return state;
    }
}

export function drafts(state = [], action) {
    switch (action.type) {
        case "DRAFTS":
        console.log(action.drafts)
            return action.drafts.message;
        default:
            return state;
    }
}

export function orderData(state = [], action) {
    switch (action.type) {
        case "SUBMIT_ORDERS":
            console.log(action.orderData)
            return action.orderData.message;
        default:
            return state;
    }
}

export function blocks(state = [], action) {
    switch (action.type) {
        case "BLOCKS":
            return action.blocks.message;
        default:
            return state;
    }
}


