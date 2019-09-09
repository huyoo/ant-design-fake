/**
 * Created by liusonglin on 2018/7/16.
 */
import React from 'react';
import { Pagination } from 'antd';

const defaultPageSize = 15, defaultPageSizeOptions = ['15', '50', '100'];

class DefaultPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage:1
        }
    }
    //分页
    onChangePage = (page,pageSize) =>{
        let pageInfo = {"page": page, "rows": pageSize}
        this.props.onChange(pageInfo);
        this.setState({currentPage:page})
    }

    onShowSizeChange = (current, size) =>{
        let pageInfo = {"page":current,"rows":size}
        this.props.onChange(pageInfo);
        this.setState({currentPage:current})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.pageInfo && Object.keys(nextProps.pageInfo).length>0){
            this.setState({currentPage:nextProps.pageInfo.page})
        }
    }

    render() {
        return (
            <div id="pageInfo">
                <Pagination
                    size="small"
                    style={{background:'#F3F8FC',textAlign:"center",paddingTop:6,paddingBottom:6,position: 'relative'}}
                    showSizeChanger={true}
                    showQuickJumper={true}
                    defaultPageSize={defaultPageSize}
                    pageSizeOptions={defaultPageSizeOptions}
                    onChange={this.onChangePage}
                    onShowSizeChange={this.onShowSizeChange}
                    total={this.props.total}
                    defaultCurrent={1}
                    current={this.state.currentPage}
                    showTotal={total => `共 ${this.props.total} 条`}/>
            </div>
        )
    }
}

export default DefaultPage
