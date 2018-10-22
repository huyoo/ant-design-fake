import React, {PureComponent} from "react"
import BasicLayout from "../layout/BasicLayout"
import Carousel from "../component/demo/carousel/Carousel"

export default class ImgPage extends PureComponent{
    render(){
        return (
            <BasicLayout>
                <Carousel/>
            </BasicLayout>
        )
    }
}