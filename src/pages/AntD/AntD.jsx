import React, { useEffect } from 'react'
import { PageContainer } from './AntD.styles'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../../features/list/listSlice'

import { Table } from 'antd'
import { AddItemForm, EditItemForm } from '../../components'
import { columns } from './columns'
import { _ } from 'lodash'

const AntD = () => {
    const dispatch = useDispatch();

    const isDark = useSelector(state => state.settings.dark)
    const editableItem = useSelector(state => state.list.editDialog)
    const orgDataSource = useSelector(state => state.list.list)
    const dataSource = orgDataSource.map((item, index) => { return { ...item, key: index } })


    return (

        <PageContainer darkMode={isDark} >
            <p>This data is stored on a Google Firebase service</p>
            <AddItemForm />
            {editableItem && <EditItemForm data={editableItem} />}
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