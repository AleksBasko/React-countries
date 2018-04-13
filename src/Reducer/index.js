import {combineReducers} from 'redux';
import articleCountries from './Countries';
import articleContinents from './Continents';
import tooltip from './Tooltip';

import counterReducer from './Counter';
import popupReducer from './Popup';

export default combineReducers({
    count: counterReducer,
    popupAction: popupReducer,
    countries: articleCountries,
    continents: articleContinents,
    tooltip: tooltip
})

