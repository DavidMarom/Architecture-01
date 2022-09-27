import { Button, Popconfirm } from "antd";
import store from '../../store'
import { deleteItem, getList } from '../../features/list/listSlice'

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
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        align: 'center',
        render: (_, record) => (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                <Button danger>Delete</Button>
            </Popconfirm>
        )
    }
];