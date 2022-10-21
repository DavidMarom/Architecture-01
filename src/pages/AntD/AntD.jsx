import React from 'react'
import { PageContainer } from './AntD.styles'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { AddItemForm } from '../../components'
import { columns } from './columns'

const AntD = () => {
    const isDark = useSelector(state => state.settings.dark)
    const editableItem = useSelector(state => state.list.editDialog)
    const orgDataSource = useSelector(state => state.list.list)
    const dataSource = orgDataSource.map((item, index) => { return { ...item, key: index } })

    return (
        <PageContainer darkMode={isDark} >
            <p>This data is stored on a Google Firebase service</p>
            <AddItemForm />
            {editableItem && <AddItemForm data={editableItem} />}
            <Table
                dataSource={dataSource}
                columns={columns}
                size={'small'}
                loading={orgDataSource.length === 0}
                pagination={{
                    showSizeChanger: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    pageSizeOptions: ['5', '10', '20', '50'],
                    defaultPageSize: 5,
                    defaultCurrent: 1,
                    total: orgDataSource.length,
                    position: ['bottomCenter']
                }}
            >
            </Table>
        </PageContainer>
    )
}

export default AntD