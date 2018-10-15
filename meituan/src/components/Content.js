import React ,{Component} from 'react';
import './../asset/css/content.css';
import './../asset/js/rem'
class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p className='title'>
                    {this.props.title}
                </p>
                <div className='contain'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Content