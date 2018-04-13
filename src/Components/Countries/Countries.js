import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from "../ArticlesList/ArticlesListApp";

class Countries extends Component {
    render() {
        const { countriesList } = this.props;
        return (
            <ArticleList list={countriesList} link='countries'/>
        )
    }
}



function mapStateToProps(state) {
    return {
        countriesList: state.countries
    };
}

export default connect(mapStateToProps)(Countries);
