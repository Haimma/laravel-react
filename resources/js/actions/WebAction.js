import Axios from 'axios';
import {
    WEB_UPDATE,
    WEB_FETCH,
    WEB_CLICKED_UPDATE,
    NEW_WEB_CLICKED_UPDATE
} from './types';

export const webUpdate = ({ prop, value }) => {
    return {
        type: WEB_UPDATE,
        payload: { prop, value }
    };
};

export const webClickedListUpdate = (web, webHistory, lastClicked) => {
    console.log('webClickedListUpdate')
    let isExist = webHistory.find(
        (w) => w.web === web
    );
    return (dispatch) => {
        if (isExist) {
            const elementIndex = webHistory.findIndex(element => element.web == web )
            let updateWeb = {web, lastClicked, clicked: webHistory[elementIndex].clicked + 1 };
            return Axios.put('/api/webhistory/update', updateWeb)
            .then(response => {
                dispatch({ type: WEB_CLICKED_UPDATE, payload: updateWeb });
            }).catch(err => console.log(err))
        } else {
            let newWeb = {web, lastClicked, clicked: 1 };
            return Axios.post('/api/webhistory/create', newWeb)
            .then(response => {
                dispatch({ type: NEW_WEB_CLICKED_UPDATE, payload: newWeb });
            }).catch(err => console.log(err))
        }

    };
};

export const webFetch = () => {
    return (dispatch) => {
        return Axios.get('/api/webhistory')
            .then(response => {
                dispatch({ type: WEB_FETCH, payload: response.data });
            }).catch(err => console.log(err))
    };
};
