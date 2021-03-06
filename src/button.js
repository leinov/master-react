/********************************
 * @file: button.js
 * @desc: propTypes可以为组件props设置传入条件
 * @author: leinov
 *******************************/

import React ,{Component} from 'react';
import propTypes from 'prop-types';
import "./index.scss";
export default class Button extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {title,type,onClick} = this.props;
        return (
            <div className={`button ${type}`} onClick={onClick}>{title?title:""}</div>
        )
    }
}
Button.propTypes = {
    title:propTypes.string.isRequired,
    type:propTypes.string.isRequired
}