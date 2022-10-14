import { Button, Popconfirm } from "antd";
import store from '../../store'
import { deleteItem, getList, openEditDialog } from '../../features/list/listSlice'

const handleDelete = (id) => {
    store.dispatch(deleteItem(id))
    store.dispatch(getList())
}

export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        sorter: (a, b) => a.age - b.age,
        dataIndex: 'age',
        key: 'age',
        width: '15%',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: '20%',
        filters: [
            { text: 'Jerusalem', value: 'Jerusalem' },
            { text: 'TLV', value: 'TLV' },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: 'Action',
        dataIndex: 'action',
        align: 'center',
        width: '20%',
        render: (_, record) => (
            <>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                    <Button danger>Delete</Button>
                </Popconfirm>
                {/* <Button onClick={() => store.dispatch(openEditDialog(record))
                }>Edit</Button> */}
            </>
        )
    }
];