import React from 'react'
import { useSelector } from 'react-redux'
import { Col, PageContainer } from './MongoDB.styles'

export const MongoDB = () => {
    const books = useSelector(state => state.books.books)
    const booksLoading = useSelector(state => state.books.isLoading)
    const isDark = useSelector(state => state.settings.dark)
    return (
        <PageContainer darkMode={isDark} >
            <Col>
                <h1>Hi</h1>
                <p>This client app calls an API on my own NodeJS server which queries a Mongo database. Here are the results (WIP)</p>
                
                { !booksLoading ?
                    books.map((book, i) => {
                        return (
                            <div key={i}>
                                {book.name}
                            </div>
                        )
                    }
                ) : 'Loading' }

            </Col>
        </PageContainer>
    )
}
