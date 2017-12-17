import React, { Component } from 'react';
import AppContainer from './screens/AppContainer';
import { Provider } from 'react-redux';
import store from './store';
import NavigationHelper from './utilities/navigation.helper';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppContainer ref={NavigationHelper.bindAppRef} />
            </Provider>
        );
    }
}

export default App;