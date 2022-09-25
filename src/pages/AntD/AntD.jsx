import React from 'react'
import { PageContainer } from './AntD.styles'
import { useSelector } from 'react-redux'
import { Button, Table } from 'antd'


export const AntD = () => {
    const isDark = useSelector(state => state.settings.dark)

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
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
            <Table dataSource={dataSource} columns={columns} />;
        </PageContainer>
    )
}
