import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showTooltip } from '../../ActionCreater'
import './TooltipEvent.css';

class TooltipEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleShoToolTip: false,
        };

        this.name = this.props.name;

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler() {
        const { showTooltipEvent } = this.props;
        showTooltipEvent(this.name);
    }

    onMouseLeaveHandler() {
        const { showTooltipEvent } = this.props;
        showTooltipEvent('');
    }

    render() {

        return (
            <div>
                <h4 className="show__tooltip" onMouseEnter = {this.onMouseEnterHandler} onMouseLeave = {this.onMouseLeaveHandler}> { this.name } </h4>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showTooltipEvent: showTooltip
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(TooltipEvent);