import React, {Component} from 'react'
import Label from "../../base/label"
import "../../../base/style/base.css"
import "./foot.css";

//底部
export default class Foot extends Component{
    constructor(){
        super();
        this.state ={
            item: []
        }
    }

    componentDidMount() {
        fetch("/data/link.json")
            .then(re => {
                if(re.status === 200){
                    return re.json()
                }
                console.log("发生错误："+ re);
                return;
            })
            .then(result => {
                this.setState({
                    item: result.data
                })
            })
            .catch((err)=>{
                console.log("发生异常:" + err);
            })
    }

    render(){
        let dom = [],
            data = this.state.item;

        if(data.length >0){
            data.map((i) => (
                dom.push(<Label value={i.value} name={i.name} left={true} key={i.value}/>/*<span key={i.value}><a href={i.value}>{i.name}</a></span>*/)
                )
            );
        }

        return (
            <div className="footer">
                <div className='foot_title'>友情链接</div>
                <div className= "link">{dom}</div>
            </div>
        )
    }
};