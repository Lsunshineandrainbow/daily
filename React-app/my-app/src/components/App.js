import React, { Component } from 'react';
import store from './../store';
import {connect} from 'react-redux';

const add = (num)=>{
    return {
        type:'ADD',
        text:num,
    }
};
const sub = ()=>{
    return {
        type:'SUB'
    }
};
class App extends Component {
    addH(num){
    store.dispatch(add(num));
}
  render() {
    return (
        <div>
            <h2>{this.props.count}</h2>
            <h2>{ this.props.aa}</h2>
            <button onClick={this.addH.bind(this,2)}>click1</button>
            <button onClick={()=>{this.props.sub()}}>click2</button>
        </div>
    );
  };

}
const mapStateToProps = (state)=>{
    return {
        count:state.count,
        aa:state.sub
    }
};
const initMapDispatchToProps = (dispatch)=>{
    return{
        sub:()=>{
            dispatch(sub())
        }
    }
};
export default connect(mapStateToProps,initMapDispatchToProps)(App);
