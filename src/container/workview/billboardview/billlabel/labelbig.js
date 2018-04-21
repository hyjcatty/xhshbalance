/**
 * Created by hyj on 2017/4/6.
 */

import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
export default class Labelbig extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"New Sign ups",
            note:"Status Report",
            status:"- - - -",
        };
    }

    updatedata(data){
        this.setState({status:data.status,title:data.title,note:data.note});
    }
    updateprop(status){
        this.setState({status:status});
    }
    initialize(title,note){
        this.setState({title:title,note:note});
    }
    render() {
        return (
            <div className="tile-stats" style={{marginBottom:0,borderStyle:"none"}}>
                <h3 style={{paddingTop:10,color:"#000000",fontWeight:"bold",fontSize:32}}>{this.state.title}</h3>
                <div key="statuspanel" className="count" style={{color:"#000000",fontSize:135,marginTop:-30,marginBottom:-10,textAlign:"center",fontWeight:900}}>{this.state.status}</div>
                <p className="pull-right" style={{fontSize:32,fontWeight:"bold",paddingRight:10,marginTop:30}}>{this.state.note}</p>
            </div>
        );
    }
}