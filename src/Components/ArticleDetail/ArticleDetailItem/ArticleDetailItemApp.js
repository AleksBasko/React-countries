import React, { Component } from 'react';
import './ArticleDetailItem.scss';

export default class ArticleDetailItem extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.label = this.props.label;
        this.ending = this.props.ending;
    }

    render() {
        let endingText = () => {
            if (this.ending) {
                return <span> { this.ending } </span>
            }
        };
        return (
            <div className='detail__item'>
                <div className='detail__label'>
                    {this.label}
                </div>
                <div className='detail__content'>
                    { this.name }
                    { endingText() }
                </div>
            </div>

        )
    }
}
