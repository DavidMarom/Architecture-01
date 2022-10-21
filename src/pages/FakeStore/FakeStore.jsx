import React from 'react'
import { PageContainer, Card, Img, ItemsContainer } from './FakeStore.styles'
import { useSelector } from 'react-redux'

const FakeStore = () => {
    const isDark = useSelector(state => state.settings.dark)
    const items = useSelector(state => state.items.items)
    const itemsLoading = useSelector(state => state.items.isLoading)

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

export default FakeStore