import {
    WEB_UPDATE,
    WEB_FETCH,
    WEB_CLICKED_UPDATE,
    NEW_WEB_CLICKED_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    web: '',
    webHistory: []
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WEB_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };

        case WEB_CLICKED_UPDATE:
            let tempWebHistory = state.webHistory;
            let web = action.payload;
            const elementIndex = tempWebHistory.findIndex(element => element.web == web.web )
            tempWebHistory[elementIndex] = web
            return { ...state, webHistory: [...tempWebHistory] };

        case NEW_WEB_CLICKED_UPDATE:
            let tempWebHistoryUpdate = state.webHistory;
            let newWeb = action.payload;
            tempWebHistoryUpdate.push(newWeb);
            return { ...state, webHistory: [...tempWebHistoryUpdate] };

        case WEB_FETCH:
            return { ...state, webHistory: action.payload };

        default:
            return state;
    }
};
