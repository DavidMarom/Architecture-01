import React from 'react'
import { PageContainer } from './AntD.styles'
import { useSelector } from 'react-redux'
import { Table } from 'antd'


export const AntD = () => {
    const isDark = useSelector(state => state.settings.dark)

    const orgDataSource = useSelector(state => state.list.list)
    const dataSource = orgDataSource.map((item, index) => { return { ...item, key: index } })


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            sortable: true,
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];


    return (
        <PageContainer darkMode={isDark} >
            <p>AntD</p>
            <Table
                dataSource={dataSource}
                columns={columns} />
        </PageContainer>
    )
}
