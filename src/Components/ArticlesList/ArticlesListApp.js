import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleItem from "../ArticleItem/ArticleItemApp";
import './ArticlesList.scss';

export default class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.list = this.props.list;
        this.link = this.props.link;
    }

    render() {
        this.articlesList = this.list.map((articleItem, i) =>
            <ArticleItem item={articleItem} key={articleItem.name + i} link={this.link}/>
        );

        return (
            <div className="article-list">
                {this.articlesList}
            </div>
        )
    }
}
