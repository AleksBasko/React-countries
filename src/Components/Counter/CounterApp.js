import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { somth } from '../../ActionCreater';

class Counter extends React.Component {
  static propTypes = {
    counter: PropTypes.number
  }
  handlerAdd = () => {
    this.props.somth();
  }

  render () {
    return (
      <div>
        <h1> { this.props.counter } </h1>
        <button onClick = { this.handlerAdd } >Click +1 </button>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    counter: state.count
  }
}

const mapToDispatch = { somth }

const decorator = connect(mapStateToProps, mapToDispatch);

export default decorator(Counter);

//
// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { somth } from '../ActionCreater';
//
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.data = this.props;
//     this.handlerAdd = this.handlerAdd.bind(this);
//
//   }
//   static propTypes = {
//     counter: PropTypes.number
//   }
//   handlerAdd() {
//     this.data.dispatch( somth() )
//   }
//
//   render () {
//     return (
//       <div>
//         <h1> { this.props.counter } </h1>
//         <button onClick = { this.handlerAdd } >Click +1 </button>
//       </div>
//     )
//   }
// }
//
// function mapStateToProps( state ) {
//   return {
//     counter: state.count
//   }
// }
//
// const decorator = connect(mapStateToProps);
//
// export default decorator(Counter);
