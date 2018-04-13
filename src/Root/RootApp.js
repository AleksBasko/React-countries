import React, { Component } from 'react';
import Common from '../Components/Common/Common';
import './main.scss';

import Store from '../Store';
import { Provider } from 'react-redux';

class Root extends Component {
    render() {
        return (
            <Provider store = { Store }>
              <Common />
            </Provider>
        );
    }
}

export default Root;
