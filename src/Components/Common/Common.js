import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import Menu from '../Menu/MenuApp';
import Counter from '../Counter/CounterApp';
import Countries from '../Countries/Countries';
import Continents from '../Continents/Continents';
import Article from '../Article/ArticleApp';
import NotFound from '../NotFound/NotFoundApp';
import Popup from '../Popup/PopupApp';
import Tooltip from "../Tooltip/TooltipApp";

class Common extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="row">
                        <div className="side-bar">
                            {/*<Counter />*/}
                            <Menu />
                        </div>
                        <div className="container">
                            <Route path='/countries' component={Countries} exact/>
                            <Route path='/continents' component={Continents} />
                            <Route path='/countries/:id' render = {this.getArticle} />
                        </div>
                        <Tooltip />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
    getArticle = ({match}) => {
      const { id } = match.params;
      return <h1>--- {id} ----</h1>
    }
}

export default Common;
