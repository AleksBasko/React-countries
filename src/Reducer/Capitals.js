import { articles } from '../Content/fixtures';

export default (articleSate = articles, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'DELETE_ARTICLE': return articleSate.filter(article => article.id !== payload.id)

    }

    return articleSate;
}