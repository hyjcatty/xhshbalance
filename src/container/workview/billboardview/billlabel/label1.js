/**
 * Created by hyj on 2017/4/6.
 */

import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
export default class Label1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"New Sign ups",
            note:"Note",
            color:"#73879c",
            value:"0"
        };
    }
    updatedata(data){
        this.setState({color:data.color,value:data.value,title:data.title,note:data.note});
    }
    updateprop(color,value){
        this.setState({color:color,value:value});
    }
    initialize(title,note){
        this.setState({title:title,note:note});
    }
    render() {
        return (
            <div className="animated flipInY" style={{paddingTop:0}}>
                <div className="tile-stats" style={{marginBottom:0}}>
                    <h3 style={{fontSize:14,paddingTop:5,marginRight:5,color:"#000000",width:"100%",fontWeight:"bold"}} className="pull-left">{this.state.title}</h3>
                    <div className="count" style={{fontSize:28,color:this.state.color,textAlign:"center",width:"100%",marginLeft:"0px"}}>{this.state.value}</div>
                    <p style={{fontSize:14,paddingTop:0,fontWeight:"bold",color:"#000000",marginRight:"10px",marginTop:"-7px"}} className="pull-right">{this.state.note}</p>
                </div>
            </div>
        );
    }
}