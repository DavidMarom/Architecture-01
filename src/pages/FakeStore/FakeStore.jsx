import React from 'react'
import { PageContainer, Card, Img, ItemsContainer } from './FakeStore.styles'
import { useSelector } from 'react-redux'

export const FakeStore = () => {
    const isDark = useSelector(state => state.settings.dark)
    const items = useSelector(state => state.items.items)
    const itemsLoading = useSelector(state => state.items.isLoading)

    console.log(itemsLoading, 'items loading')
    return (

        <PageContainer darkMode={isDark} >
            <p>Http request to fakestoreapi.com</p>
            <ItemsContainer>

                {!itemsLoading ? 
                    items.map((item, idx) =>
                        <Card key={idx}>
                            <Img src={item.image} key={idx} alt="" />
                        </Card>
                    )
                    : 'Loading...'

                }
            </ItemsContainer>
        </PageContainer>
    )
}
