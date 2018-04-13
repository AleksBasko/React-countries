import React, { Component } from 'react';
import './ArticleItemImage.scss';

export default class ArticleItemImage extends Component {
    constructor(props) {
        super(props);
        this.image = this.props.img;
    }

    render() {
        let articleImg;

        if (this.image.flag || this.image.coatArms) {
            articleImg = <div>
                <div>
                    <img src= { this.image.flag }  alt={ this.image.flagText }/>
                    <img src= { this.image.coatArms }  alt={ this.image.coatArmsText }/>
                </div>
                <img src= { this.image.geography }  alt={ this.image.geographyText }/>
            </div>
        }
        else {
            articleImg = <div>
                <img src= { this.image.geography }  alt={ this.image.geographyText }/>
            </div>
        }

        return (
            <div className = "article-item__col-img">
                { articleImg }
            </div>
        )
    }
}
