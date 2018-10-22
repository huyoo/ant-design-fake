import React, {PureComponent} from "react"
import BasicLayout from "../layout/basicLayout"
import Head from "../component/demo/head/head"

export default class Home extends PureComponent{
    render(){
        return (
            <BasicLayout>
                <Head/>
            </BasicLayout>
        )
    }
}