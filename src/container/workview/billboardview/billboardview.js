/**
 * Created by hyj on 2017/3/10.
 */

import React, {
    Component,
    PropTypes
    } from 'react';

import classNames from 'classnames';
import '../../../../resource/css/font-awesome.min.css';
import './billboardview.css';
import Label1 from "./billlabel/label1.js"
import Chamber from "./billlabel/chamberlabel.js"
import Labelbig from "./billlabel/labelbig.js"



export default class billboardview extends Component {
    constructor(props) {
        super(props);

        this.colorlist={
            RED:"#880000",
            ORANGE:"#bb5500",
            BLUE:"#000088",
            GREEN:"#227700",
            GRAY:"#878787",
            PURPLE:"#4b0082",
            LBLUE:"#003377",
            LGREEN:"#008800",
            LGRAY:"#696969",
            DBLUE:"#191970"
        };
        let showlist= [
            {key:"Labelbigboard1",value:{title:"New Sign ups",note:"Status Report",status:"- - - -"}},
            //{key:"Labelbigboard2",value:{"title":"Current Weight2","unit":"g",value:0}},
            {key:"Label1x1",value:{"title":"Target Weight", "unit":"g",value: 0, color: "#696969"}},
            {key:"Label1x2",value:{"title":"Upper Weight", "unit":"g",value: 0, color: "#696969"}},
            {key:"Label1x3",value:{"title":"Error Notes", "unit":"Please notice",value: "info", color: "#696969"}},
            {key:"Label1x4",value:{"title":"Total Package", "unit":"pcs",value: 0, color: "#696969"}},
            {key:"Label1x5",value:{"title":"Total Weight", "unit":"g",value: 0, color: "#696969"}},
            {key:"Label1x6",value:{"title":"Speed Package", "unit":"pcs/min",value: 0, color: "#696969"}},
            {key:"Label1x7",value:{"title":"Speed Weight", "unit":"g/min",value: 0, color: "#696969"}},
            {key:"Label1x8",value:{"title":"Error Count", "unit":"times",value: 0, color: "#696969"}},
            //{key:"Label1x9",value:{"title":"Error Notes", "unit":"Please notice",value: "info", color: "#696969"}},
            //{key:"Label1x10",value:{"title":"Error Count", "unit":"times",value: 0, color: "#696969"}},
            //{key:"Label1x11",value:{"title":"Error Notes", "unit":"Please notice",value: "info", color: "#696969"}},

            {key:"Chamber1x1",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]},
            {key:"Chamber1x2",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]},
            {key:"Chamber1x3",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]},
            {key:"Chamber1x4",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]},
            {key:"Chamber1x5",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]},
            {key:"Chamber1x6",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]},
            {key:"Chamber1x7",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]},
            {key:"Chamber1x8",value:[{color:"#73879c",value:"0"},{color:"#73879c",value:"1"},{color:"#73879c",value:"2"}]}
        ];

        this.state={
            height:700,
            width:600,
            showlist:showlist,
            defaultshow:showlist,
            configuration:null,
            hide:"block",
            language:{
                "Label1x1":{
                    "title":"Target Weight", "unit":"g"
                },
                "Label1x2":{
                    "title":"Upper Weight", "unit":"g"
                },
                "Label1x3":{
                    "title":"Total Package", "unit":"pcs"
                },
                "Label1x4":{
                    "title":"Total Weight", "unit":"g"
                },
                "Label1x5":{
                    "title":"Speed Package", "unit":"pcs/min"
                },
                "Label1x6":{
                    "title":"Speed Weight", "unit":"g/min"
                },
                "Labelbigboard":{
                    "title":"Current Weight",
                    "unit":"g"
                }
            }
        };


    }
    update_language(language){
        //console.log(language);
        this.setState({language:language});
    }
    update_size(width,height){
        this.setState({height:height,width:width});

    }
    update_configuration(configuration){
        this.setState({configuration:configuration});
    }
    update_light(lightlist){
    }
    update_status(status){
        //console.log(status);
        this.setState({showlist:status},this.flash_status);
    }
    flash_light(){
    }
    flash_status(){
        for(let i=0;i<this.state.showlist.length;i++){
            this.refs[this.state.showlist[i].key].updatedata(this.state.showlist[i].value);
        }
    }
    clearbillboard(){
        this.update_status(this.state.defaultshow);
    }
    hide(){
        this.setState({hide:"none"});
    }
    show(){
        this.setState({hide:"block"});
    }
    render() {
        return (
            <div style={{position:"relative",background:"#FFFFFF",height:this.state.height,maxHeight:this.state.height,width:'100%',display:this.state.hide,overflowY:'hidden',overflowX:'hidden'}}>
                <div key = "leftpanel" style={{width:this.state.width*0.96,height:this.state.height,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>

                    <div key = "Labelbigboard1" style={{width:this.state.width*0.715,float: "left",position:"relative",marginTop:this.state.width*0.02}}>
                        <div className="animated flipInY">
                            <Labelbig ref="Labelbigboard1"/>
                        </div>
                    </div>
                    <div key = "Label1x1" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x1"/>
                    </div>
                    <div key = "Label1x2" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x2"/>
                    </div>
                    <div key = "Label1x3" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x3"/>
                    </div>
                    <div key = "Label1x4"  style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x4"/>
                    </div>
                    <div key = "Label1x5"  style={{width:this.state.width*0.225,float: "left",position:"relative",marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x5"/>
                    </div>
                    <div key = "Label1x6" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x6"/>
                    </div>
                    <div key = "Label1x7"  style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x7"/>
                    </div>
                    <div key = "Label1x8" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x8"/>
                    </div>
                    <div key = "Chamber1x1" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x1"/>
                    </div>
                    <div key = "Chamber1x2" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x2"/>
                    </div>
                    <div key = "Chamber1x3" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x3"/>
                    </div>
                    <div key = "Chamber1x4"  style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x4"/>
                    </div>
                    <div key = "Chamber1x5"  style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x5"/>
                    </div>
                    <div key = "Chamber1x6" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x6"/>
                    </div>
                    <div key = "Chamber1x7"  style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x7"/>
                    </div>
                    <div key = "Chamber1x8" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x8"/>
                    </div>
                </div>
            </div>
        );


        /*
        return (
            <div style={{position:"relative",background:"#FFFFFF",height:this.state.height,maxHeight:this.state.height,width:'100%',display:this.state.hide,overflowY:'hidden',overflowX:'hidden'}}>
                <div key = "leftpanel" style={{width:this.state.width*0.96,height:this.state.height,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                    <div key = "Chamber1x1" style={{width:this.state.width*0.1025,float: "left",position:"relative"}}>
                        <Chamber ref="Chamber1x1"/>
                    </div>
                    <div key = "Chamber1x2" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x2"/>
                    </div>
                    <div key = "Chamber1x3" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x3"/>
                    </div>
                    <div key = "Chamber1x4"  style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x4"/>
                    </div>
                    <div key = "Chamber1x5"  style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x5"/>
                    </div>
                    <div key = "Chamber1x6" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x6"/>
                    </div>
                    <div key = "Chamber1x7"  style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x7"/>
                    </div>
                    <div key = "Chamber1x8" style={{width:this.state.width*0.1025,float: "left",position:"relative",marginLeft:this.state.width*0.02}}>
                        <Chamber ref="Chamber1x8"/>
                    </div>
                    <div key = "Labelbigboard1" style={{width:this.state.width*0.47,float: "left",position:"relative",marginTop:this.state.width*0.02}}>
                        <div className="animated flipInY">
                            <Labelbig ref="Labelbigboard1"/>
                        </div>
                    </div>
                    <div key = "Labelbigboard2" style={{width:this.state.width*0.47,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <div className="animated flipInY">
                            <Labelbig ref="Labelbigboard2"/>
                        </div>
                    </div>
                    <div key = "Label1x1" style={{width:this.state.width*0.225,float: "left",position:"relative",marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x1"/>
                    </div>
                    <div key = "Label1x2" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x2"/>
                    </div>
                    <div key = "Label1x3" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x3"/>
                    </div>
                    <div key = "Label1x4"  style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x4"/>
                    </div>
                    <div key = "Label1x5"  style={{width:this.state.width*0.225,float: "left",position:"relative",marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x5"/>
                    </div>
                    <div key = "Label1x6" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x6"/>
                    </div>
                    <div key = "Label1x7"  style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x7"/>
                    </div>
                    <div key = "Label1x8" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x8"/>
                    </div>
                    <div key = "Label1x9" style={{width:this.state.width*0.225,float: "left",position:"relative",marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x9"/>
                    </div>
                    <div key = "Label1x10" style={{width:this.state.width*0.225,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x10"/>
                    </div>
                    <div key = "Label1x11" style={{width:this.state.width*0.47,float: "left",position:"relative",marginLeft:this.state.width*0.02,marginTop:this.state.width*0.02}}>
                        <Label1 ref="Label1x11"/>
                    </div>
                </div>
            </div>
        );*/

    }
}