import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root/RootApp';
import store from './Store'

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
