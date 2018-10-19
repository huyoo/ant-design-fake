import React, {Component} from "react"
import OptionItem from "./optionItem"
import "./menu.css"

//导航级联菜单
export default class Menu extends Component{
    constructor(){
        super();
        this.state = {
            data: [
                {
                id: "1",
                name: "办公效率",
                link: "",
                items:[{
                    id: "11",
                    name: "PPT",
                    link: "",
                },{
                    id: "12",
                    name: "Excel",
                    link: ""
                },{
                    id: "13",
                    name: "Word",
                    link: ""
                }]
            },
                {
                id: "2",
                name: "职场发展",
                link: "",
                items:[{
                    id: "21",
                    name: "个人提升",
                    link: "",
                },{
                    id: "22",
                    name: "求职应聘",
                    link: ""
                },{
                    id: "23",
                    name: "Word",
                    link: ""
                }]
            },
                {
                id: "3",
                name: "IT&互联网",
                link: "",
                items:[{
                    id: "31",
                    name: "后端开发",
                    link: "",
                },{
                    id: "32",
                    name: "编程语言",
                    link: ""
                },{
                    id: "33",
                    name: "Word",
                    link: ""
                }]
            },
                {
                id: "4",
                name: "语言留学",
                link: "",
                items:[{
                    id: "41",
                    name: "英语",
                    link: "",
                },{
                    id: "42",
                    name: "留学",
                    link: ""
                },{
                    id: "43",
                    name: "小语种",
                    link: ""
                }]
            }]
        };
    }
    handleMouseOver(){

    }
    render(){
        let optionArr = [],
            detailArr = [];

        this.state.data.forEach((item, index)=>{
            optionArr.push(<OptionItem data={item} key={index} overHandle={this.handleMouseOver}/>)
        });


        return (
            <div className="menu">
                <div className="left">{optionArr}</div>
                <div className="right">{detailArr}</div>
            </div>
        )
    }
}