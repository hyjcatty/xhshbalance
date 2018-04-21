/**
 * Created by Huang Yuanjie on 2018/4/21.
 */


import React, {
    Component,
    PropTypes
} from 'react';

import classNames from 'classnames';
export default class ChamberLabel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"1",
            value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#D3D3D3",value:"2"}]
        };
    }
    updatedata(data){
        this.setState({title:data.title,value:data.value});
    }
    render() {
        return (
            <div className="animated flipInY" style={{paddingTop:0}}>
                <div className="tile-stats" style={{marginBottom:0,borderRadius:"0px",borderBottomStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderLeftWidth:"3px",borderLeftColor:"#D3D3D3"}}>
                    <h3 style={{fontSize:16,paddingTop:10,marginRight:5,color:"#000000",width:"100%",fontWeight:"bold"}} className="pull-left">{this.state.title}</h3>
                    <div className="count" style={{fontSize:24,color:this.state.value[0].color,textAlign:"center",width:"100%",marginLeft:"0px"}}>{this.state.value[0].value}</div>
                    <div className="count" style={{fontSize:24,color:this.state.value[1].color,textAlign:"center",width:"100%",marginLeft:"0px"}}>{this.state.value[1].value}</div>
                    <div className="count" style={{fontSize:24,color:this.state.value[2].color,textAlign:"center",width:"100%",marginLeft:"0px"}}>{this.state.value[2].value}</div>
                </div>
            </div>
        );
    }
}