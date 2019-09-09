/**
 * decs:  SelectTable配套表格
 * author: hy
 * time: 2019/9/6
 */
import React, { PureComponent } from 'react';
import { Table} from 'antd';
import DefaultPage from './DefaultPage'

const defaultPageSize = 15;

function initTotalList(columns) {
    const totalList = [];
    columns.forEach(column => {
        if (column.needTotal) {
            totalList.push({ ...column, total: 0 });
        }
    });
    return totalList;
}

class SimpleTable extends PureComponent {
    constructor(props) {
        super(props);
        const { columns } = props;
        const needTotalList = initTotalList(columns);
        this.state = {
            selectedRowKeys: [],
            selectedRows: [],
            pageInfo:{},
            needTotalList,
            dataSource:[],
            filterData:[],
            columns:null,
            scrollX:null,
            scrollY:null,
            total:0,
            yHeight:1024
        };
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize.bind(this));
    }

    componentDidMount(){
        if(!this.props.heightY) {
            this.updateSize();
            window.addEventListener('resize', this.updateSize.bind(this));
        }else{
            this.setState({scrollY:this.props.heightY+12})
        }
        this.customerCloumns();
    }

    getElementTop(element){
        if(element){
            let actualTop = element.offsetTop;
            let current = element.offsetParent;

            while (current !== null){
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            return actualTop;
        }
        return 0;
    }

    componentWillMount(){
        this.prepareData(this.props.data);
    }

    updateSize(){
        if(this.simpleDiv){
            let yHeight = document.body.clientHeight-this.getElementTop(this.simpleDiv)-5;
            let scrollY=(this.props.heightY?(this.props.heightY+12):(yHeight-83));
            this.setState({scrollY})
        }
    }

    prepareData = (data) => {
        let list;
        let total;
        if(data && data.rows){
            list = data.rows;
            total = data.records;
        }else {
            list = data;
            total = data?data.length:0;
        }
        let size = this.state.pageInfo.rows?this.state.pageInfo.rows:defaultPageSize
        if(list && list.length>size){
            this.setState({dataSource:list,filterData:list.slice(0,size),total});
        }else {
            this.setState({dataSource:list,filterData:list,total});
        }
        if(data && data.page !== this.state.pageInfo.page){
            this.setState({pageInfo:{...this.state.pageInfo,page:data.page}});
        }
    }

    customerCloumns = () =>{
        const {columns} = this.props;
        let sequence;
        let withSequence;
        if(!this.props.noSequence){
            sequence = {
                title: '',
                key:'sequence',
                width:30,
                align:"center",
                render: (text, record, index) => {
                    const {pageInfo} = this.state
                    if(pageInfo.page&&pageInfo.rows){
                        return (pageInfo.page-1)*pageInfo.rows+index+1
                    }else {
                        return index+1
                    }
                }
            }
            withSequence = [sequence,...columns];
        }else{
            withSequence = [...columns]
        }
       
        if(this.simpleDiv){
            let sumWidth = getTotalWith(withSequence);
            let diff = this.simpleDiv.offsetWidth - sumWidth
            if(diff>0){
                if(this.props.autoWidth === false){
                    withSequence = [...withSequence,{
                        title: '',
                        key:'blank',
                        width:diff,
                        className:'blank-cell'
                    }]
                }
                this.setState({columns:withSequence})
            }
            if(diff<0){
                this.setState({columns:withSequence,scrollX:sumWidth})
            }
            if(diff===0){
                this.setState({columns:withSequence})
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.rowsSelected) {
            const rowkeys = nextProps.rowsSelected.map(item => {
                return item[nextProps.rowKey || 'id']
            })
            this.setState({selectedRowKeys: rowkeys, selectedRows: nextProps.rowsSelected});
        }
        if(nextProps.data && JSON.stringify(nextProps.data)!==JSON.stringify(this.state.dataSource)){
            this.prepareData(nextProps.data);
        }
    }

    handleRowSelectChange = (selectedRowKeys, selectedRows) => {
        const { needTotalList: list } = this.state;
        const { onSelectRow } = this.props;
        let needTotalList = [...list];
        needTotalList = needTotalList.map(item => {
            return {
                ...item,
                total: selectedRows.reduce((sum, val) => {
                    return sum + parseFloat(val[item.dataIndex], 10);
                }, 0),
            };
        });
        if (onSelectRow) {
            onSelectRow(selectedRows);
        }
        this.setState({ selectedRowKeys, needTotalList ,selectedRows});
    };

    handleTableChange = (pagination) => {
        const { pageChange } = this.props;
        const { dataSource } = this.state;
        this.setState({pageInfo:pagination});
        if(dataSource.length>pagination.rows){
            const {page , rows} = pagination;
            let filterData = dataSource.slice((page-1)*rows,page*rows)
            this.setState({filterData});
        }else {
            this.setState({filterData:dataSource});
        }
        if(pageChange){
            pageChange(pagination);
        }
        this.cleanSelectedKeys();

    };

    cleanSelectedKeys = () => {
        this.handleRowSelectChange([], []);
    };

    rowClick = (record) => {
        const {rowKey} = this.props
        if(!this.props.checkBox || this.props.checkBox==='radio'){
            this.state.selectedRowKeys.includes(record[rowKey||'id'])?
            this.handleRowSelectChange([],[]):
            this.handleRowSelectChange([record[rowKey||'id']],[record]);
        }else if(this.state.selectedRowKeys.includes(record[rowKey||'id'])){
            let keys = this.state.selectedRowKeys;
            keys.splice(keys.indexOf(record[rowKey||'id']), 1);

            let rows = this.state.selectedRows;
            rows.splice(rows.indexOf(record), 1);
            this.handleRowSelectChange(keys,rows);
        }else{
            let keys = this.state.selectedRowKeys;
            let rows = this.state.selectedRows;
            this.handleRowSelectChange([...keys,record[rowKey||'id']],[...rows,record]);
        }
    }

    rowClassName = (record) => {
        for(let i=0;i<this.state.selectedRows.length;i++){
            let item = this.state.selectedRows[i]
            if(item === record){
                return "tr-selected tr-size"
            }
        }
        return 'tr-size';
    }

    checkboxProps = (record) => {
        return {checked: record.disabled?false:this.state.selectedRowKeys.includes(record[this.props.rowKey||'id']),
                disabled:record.disabled};
    }

    render() {
        const { selectedRowKeys,total,filterData,columns,scrollY, scrollX} = this.state;
        const {
            checkBox,
            rowKey,
            loading,
            components,
            onRow
        } = this.props;

        const paginationProps = {
            total:total,
            pageInfo:this.state.pageInfo,
            onChange:this.handleTableChange
        };

        const rowSelection = checkBox?{
            selectedRowKeys,
            columnWidth:62,
            type:checkBox,
            onChange: this.handleRowSelectChange,
            getCheckboxProps: this.checkboxProps
        }:null;

        return (
            <div id="defaultSimpleTable" ref={(div)=>this.simpleDiv=div} style={{background:'#fff',border: '1px solid #e8e8e8',...this.props.style}}>
                <Table className='fixedWidthTable'
                    ref={(table)=>this.table=table}
                    checkBox={checkBox}
                    style={{height:scrollY+50}}
                    rowKey={rowKey?rowKey:'id'}
                    components={components}
                    rowSelection={this.props.rowSelection?this.props.rowSelection:rowSelection}
                    dataSource={filterData}
                    bordered={true}
                    loading={loading}
                    pagination={false}
                    columns={columns}
                    rowClassName={this.rowClassName}
                    scroll={{y:scrollY,x:scrollX}}
                    onRow={onRow || ((record,index) => {
                        return {
                            onClick: () => {this.rowClick(record,index)},       // 点击行
                        };
                    })
                    }
                />
                {this.props.pagination === false ?null:<DefaultPage {...paginationProps}/>}
            </div>
        );
    }
}

function getTotalWith(columns) {
    let sum = 0;
    for(let i=0;i<columns.length;i++){
        let item  =  columns[i]
        if(!item.width){
            item.width=100;
            sum+=100;
        }else if(typeof item.width !== 'string'){
            sum+=item.width;
        }
        item.className='columns-size'
    }
    return sum;
}

export default SimpleTable;
