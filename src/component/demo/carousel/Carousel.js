import React, {Component} from "react"
import Dot from "./Dot"
import SliderItem from "./SliderItem"
import "./Carousel.css"

// 走马灯轮播图
export default class Carousel extends Component{
    constructor(){
        super();
        this.state = {
            item: [],
            currentIndex: 0,
            total: 0
        };
        this.handelDotClick = this.handelDotClick.bind(this);
        this.refHb = React.createRef();
    }
    componentDidMount(){
        fetch("/data/imgData.json")
            .then(re => re.json())
            .then(re => {
                this.setState({
                    item: re,
                    total: re.length
                })
            })
            .catch()
    }
    componentDidUpdate(){
        let _this = this;
        this.timer = setTimeout(() => {
            _this.setState(prevState=>{
                let {currentIndex, total} = prevState;
                currentIndex++;
                return {
                    currentIndex: currentIndex === total? 0: (prevState.currentIndex+1)
                }
            })
        }, 3000);
    }
    componentWillUnmount(){
        //组件销毁前移除定时器
        clearTimeout(this.timer);
    }
    handelDotClick(index){

        clearTimeout(this.timer);
        this.setState({
            currentIndex: index
        });
    }


    render(){
        let {item, currentIndex, total} = this.state,
            arr = [],
            animation;

        item.forEach((img, index) => {
            arr.push(<SliderItem key={index}
                                 href={img.link}
                                 title={img.name}
                                 ref={ref => {this.refHb=ref}}
                                 src={img.img} index={currentIndex}/>)
        });
        animation = {
            width: 1130*total+ "px",
            transition: "1s all",
            left: -1130*currentIndex +"px"
        };

        return(
            <div className="carousel">
                <div className="img_container" style={animation}>{arr}</div>
                <Dot clickHandle={this.handelDotClick} current={currentIndex} total={total}/>
            </div>
        );
    }
}