import React, { useEffect } from 'react'
import { PageContainer, Card, Img, ItemsContainer } from './FakeStore.styles'
import { getItems } from '../../features/items/itemsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const FakeStore = () => {
    const dispatch = useDispatch();

    const isDark = useSelector(state => state.settings.dark)
    const items = useSelector(state => state.items.items)

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    if (items) {
        return (
            <PageContainer darkMode={isDark} >
                <p>Http request to fakestoreapi.com</p>
                <ItemsContainer>

                    {items.map((item, idx) =>
                        <Card key={idx}>
                            <Img src={item.image} key={idx} alt="" />
                        </Card>
                    )
                    }
                </ItemsContainer>
            </PageContainer>
        )
    }
}
