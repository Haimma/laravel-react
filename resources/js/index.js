import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './styles.css';


import reducers from './reducers';
import User from './screens/User';
import Admin from './screens/Admin';

function Index() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    {/* <div> */}
                        <Link to="/">User</Link>
                        <Link to="/admin">Admin</Link>
                        <Route path="/" exact component={User}/>
                        <Route path="/admin" exact component={Admin}/>
                    {/* </div> */}
                </Route>
            </BrowserRouter>
         </Provider>
    );
}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
