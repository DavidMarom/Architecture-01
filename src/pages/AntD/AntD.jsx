import React from 'react'
import { PageContainer } from './AntD.styles'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { AddItemForm } from '../Form/Form'
import { columns } from './columns'


export const AntD = () => {
    const isDark = useSelector(state => state.settings.dark)
    const editableItem = useSelector(state => state.list.editDialog)
    const orgDataSource = useSelector(state => state.list.list)
    const dataSource = orgDataSource.map((item, index) => { return { ...item, key: index } })

    return (
        <PageContainer darkMode={isDark} >
            <p>Data in this table is coming from firebase firestore</p>
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
