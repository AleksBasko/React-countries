import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ArticleDetail from "../ArticleDetail/ArticleDetailApp";
import ArticleItemImage from "./ArticleItemImage/ArticleItemImageApp";
import './ArticleItem.scss';

export default class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.item;
    this.link = this.props.link;
    this.details = this.data.details;
    this.state = {
      isToggleShowCode: false
    };
    this.showCode = this.showCode.bind(this);
  }
  showCode() {
    this.setState({
      isToggleShowCode: !this.state.isToggleShowCode
    });
  }

  render() {

    let articleCont;
    let buttonText;

    if (this.state.isToggleShowCode) {

      articleCont = <ArticleDetail details = {this.details} />;
      buttonText = <span> Hide code </span>;
    }
    else {
      buttonText = <span> Show code </span>;
    }

    return (
      <div className = "article-list__item">
        <div className = "article-item__inner">
          <div className = "article-item__row">
            <div className = "article-item__col-text">
              <h2> { this.data.name } </h2>
              <p className = "article-item__paragraph"> { this.data.shortArticle } </p>
              <Link className ="article-item__btn" to={`/${this.link}/${this.data.id}`}> Learn More </Link>
              <button onClick = { this.showCode }> { buttonText } </button>
            </div>
            <ArticleItemImage img={this.data.image}/>
          </div>
          <div> { articleCont } </div>
        </div>
      </div>
    )
  }
}
