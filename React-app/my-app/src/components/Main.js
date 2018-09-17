import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect,withRouter,Prompt,NavLink} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';
import Children from "./Children";
const Jump = (props)=>{
    return <Link to ={props.to}>Jump</Link>

};
const X = withRouter(({history})=>{
    return (
        <div>
            <button onClick={(props)=>{history.push('/a')}}>
                跳转到PageA
            </button>
        </div>
    )
});
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }

    };
    render(){
        return(
            <div>
                山竹
                <Router>
                    <div>
                        {/*<Link to='/'>首页</Link>*/}
                        {/*-----------*/}
                        {/*<Link to='/a/5'>跳到A</Link>*/}
                        {/*——————*/}
                        {/*<Link to='/b'>跳到B</Link>*/}
                        {/*------------*/}
                        {/*<Link to='/r'>跳到render</Link>*/}
                        {/*-------------*/}
                        {/*<Link to='/children/8'>Children</Link>*/}
                        {/*-------------*/}
                        {/*<Link to='/x'>编程式导航</Link>*/}
                        <NavLink to='/'>首页</NavLink>
                        -----------
                        <NavLink to='/a/5'>跳到A</NavLink>
                        ——————
                        <NavLink to='/b'>跳到B</NavLink>
                        ------------
                        <NavLink to='/r'>跳到render</NavLink>
                        -------------
                        <NavLink to='/children/8'>Children</NavLink>
                        -------------
                        <NavLink to='/x'>编程式导航</NavLink>
                        {/*<Switch>*/}

                            <Route path='/a/:id' component={PageA}></Route>
                            <Route path='/b' component={PageB}></Route>
                            <Route path='/' component={Home} exact></Route>
                            <Route path='/r' render={()=>{
                                return <h1>Render</h1>}}></Route>
                            <Route Path='/children/:num' children={Children}></Route>
                            <Route path='/b' render={()=>{return(<Redirect to='/r'/>)}}></Route>
                            <Jump to='/r'></Jump>
                        {/*</Switch>*/}
                        <Route path='/x' component={X}></Route>
                        <Prompt when={this.state.show} message='是否要跳转'></Prompt>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Main