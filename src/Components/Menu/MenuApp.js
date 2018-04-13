import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { showPopup } from '../../ActionCreater';
import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="menu">
        <ul>
            <li>
                <NavLink to='/' exact>Главная</NavLink>
            </li>
            <li>
                <NavLink to='/countries' activeClassName="selected">Государства</NavLink>
            </li>
            <li>
                <NavLink to='/continents' activeClassName="selected">Континенты</NavLink>
            </li>
            <li>
                <NavLink to='/continents' activeClassName="selected">Океаны</NavLink>
            </li>
            <li>
                <NavLink to='/continents' activeClassName="selected">Вершины</NavLink>
            </li>
        </ul>
          {/*<button onClick = { this.hendlerPopup }>Show popup</button>*/}
      </section>
    );
  }
}

export default Menu;
