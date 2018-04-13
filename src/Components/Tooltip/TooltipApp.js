import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Tooltip.css';

class Tooltip extends Component {
    render() {
        const {tooltipState, content} = this.props;

        let tooltipContent;
        if (tooltipState) {
            tooltipContent = <div className="tooltip">
                <h4> {content.name} </h4>
                <h4> {content.area} </h4>
                <h4> {content.population} </h4>
                <h4> {content.country} </h4>
            </div>
        }
        return (
            <div>
                {tooltipContent}
            </div>
        )
    }
}


function mapStateToProps(state) {
    // console.log(state);
    return {
        // tooltipState: state.tooltip.td,
        tooltipState: state.tooltip.td,
        content: state.tooltip.tr,
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         showArticleListLocal: showArticleList
//     }, dispatch)
// }
export default connect(mapStateToProps)(Tooltip);
