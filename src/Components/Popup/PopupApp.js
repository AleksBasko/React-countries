import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showPopup } from '../../ActionCreater';
import './Popup.css';

class Popup extends Component {
    constructor(props) {
        super(props);
    }

    toggleStatePopup() {
        this.props.showPopup();
    }

    render() {
        let popupContent;
        if ( this.props.popupOpen ) {
            popupContent =
            <div className="popup">
                <div className="popup__window">
                  <button onClick={this.toggleStatePopup.bind(this)} className="popup__close">X</button>
                    <h3 className="popup__title">This Popup open!</h3>
                    <p>Some text</p>
                </div>
            </div>
        }

        return (
            <div>
                { popupContent }
            </div>
        );
    }
}

function mapStateToProps( state ) {
  return {
    popupOpen: state.popupAction
  }
}

const mapToDispatch = { showPopup };

const decorator = connect(mapStateToProps, mapToDispatch);

export default decorator(Popup);
