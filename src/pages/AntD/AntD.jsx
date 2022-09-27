import React from 'react'
import { PageContainer } from './AntD.styles'
import { useSelector } from 'react-redux'
import { Table, Pagination } from 'antd'
import { columns } from './columns'


export const AntD = () => {
    const isDark = useSelector(state => state.settings.dark)

    const orgDataSource = useSelector(state => state.list.list)
    const dataSource = orgDataSource.map((item, index) => { return { ...item, key: index } })

    return (
        <PageContainer darkMode={isDark} >
            <p>AntD</p>
            <Table
                dataSource={dataSource}
                columns={columns}
                size={'small'}
                loading={orgDataSource.length === 0}
            >
                <Pagination total={3} />
            </Table>

        </PageContainer>
    )
}
