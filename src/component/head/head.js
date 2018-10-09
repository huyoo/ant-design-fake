import React, {Component} from 'react'
import Label from  "../base/label"
import './header.css'

//首页顶部链接
export default class Head extends Component {
    constructor(){
        super();
        this.state = {
            user: false,
            link: []
        }
    }
    componentDidMount(){
        fetch("/data/isLogin.json")
            .then(re => {
                return re.json();
            })
            .then(({user, link}) => {
                this.setState({
                    user: user,
                    link: link
                })
            })
            .catch(er => {
                console.log(er);
            })
    }
    render (){
        let item = [],
            {user, link} = this.state;

        item.push(<Label key={0} name={"你好,"+ (user?user:"请登录")} value={user? "/userId" : "/login"} left={true}/>);

        link.forEach((i, index) => {
            item.push(<Label key={index+1} name={i.name} value={i.value} left={false}/>)
        });

        return (
            <header className="base_bg f14">
                <div className="title">
                    {item}
                </div>
            </header>
        )
    }
}