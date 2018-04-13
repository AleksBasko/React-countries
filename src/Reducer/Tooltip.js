import { capitals } from '../Content/Content';

const initialState = {
    td: false,
    tr: ''
};

export default (tooltipState = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SHOW_TOOLTIP':
            return Object.assign({}, tooltipState, {
                td: !tooltipState.td,
                tr: capitals.filter(city => city.name === payload.name)[0]
            });
    }

    return tooltipState;
}


// export default (tooltipState = false, action) => {
//     const {type, payload} = action;
//     switch (type) {
//         case 'SHOW_TOOLTIP':
//             return ({
//                 tooltipState: !tooltipState,
//                 visibilityFilter: capitals.filter(city => city.name === payload.name)
//             });
//         default:
//             return tooltipState
//     }
// }

//
// import { articles } from '../Content/fixtures';
//
// export default (articleSate = articles, action) => {
//     const {type, payload} = action;
//     switch (type) {
//         case 'DELETE_ARTICLE': return articleSate.filter(article => article.id !== payload.id)
//
//     }
//
//     return articleSate;
// }
