import React, {PureComponent} from "react"
import BasicLayout from "../layout/basicLayout"
import Carousel from "../component/demo/carousel/carousel"

export default class ImgPage extends PureComponent{
    render(){
        return (
            <BasicLayout>
                <Carousel/>
            </BasicLayout>
        )
    }
}