import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from "../ArticlesList/ArticlesListApp";

class Continents extends Component {
    render() {
        const { continentsList } = this.props;
        return (
            <ArticleList list={continentsList}/>
        )
    }
}



function mapStateToProps(state) {
    return {
        continentsList: state.continents
    };
}

export default connect(mapStateToProps)(Continents);