import React, { Component } from 'react';
import TooltipEvent from "../TooltipEvent/TooltipEventApp";
import ArticleDetailItem from "./ArticleDetailItem/ArticleDetailItemApp";
import './ArticleDetail.css';

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.details;
    }

    render() {
        let articleCont = [];
        let label= '';

        for(let item in this.data) {

            if (item === 'capital') {
                label = 'Столица: ';
                articleCont.push(<TooltipEvent key={item.toString()} name={this.data[item]}/>);
            }
            else if (item === 'largestCity') {
                label = 'Крупнейшие города: ';
                let citiesList = this.data[item].map((articleItem, i) =>
                    <span key={i}> {articleItem}, </span>);

                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={citiesList} />)
            }
            else if (item === 'oceans') {
                label = 'Омывается океанами: ';
                let citiesList = this.data[item].map((articleItem, i) =>
                    <span key={i}> {articleItem}, </span>);

                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={citiesList} />)
            }
            else if (item === 'rivers') {
                label = 'Крупнейшие реки: ';
                let citiesList = this.data[item].map((articleItem, i) =>
                    <span key={i}> {articleItem}, </span>);

                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={citiesList} />)
            }
            else if (item === 'peaks') {
                label = 'Вершины: ';
                let citiesList = this.data[item].map((articleItem, i) =>
                    <span key={i}> {articleItem}, </span>);

                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={citiesList} />)
            }
            else if (item === 'area') {
                label = 'Территория: ';
                let textEnd = 'км²';
                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={this.data[item]} ending={textEnd} />)
            }
            else if (item === 'population') {
                label = 'Население: ';
                let textEnd = 'чел.';
                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={this.data[item]} ending={textEnd} />)
            }
            else if (item === 'officialLanguage') {
                label = 'Официальный язык: ';
                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={this.data[item]} />)
            }
            else if (item === 'currency') {
                let textEnd = '';
                label = 'Денежная еденица: ';
                textEnd = `(${this.data[item].currencyCode})`;
                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={this.data[item].currencyName} ending={textEnd} />)
            }
            else if (item === 'webDomen') {
                label = 'Интернет-домен: ';
                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={this.data[item]} />)
            }
            else if (item === 'numberCountries') {
                label = 'Количество государств: ';
                articleCont.push(<ArticleDetailItem key={item.toString()} label = {label} name={this.data[item]} />)
            }
        }

        return (
            <div>
                { articleCont }
            </div>
        )
    }
}
