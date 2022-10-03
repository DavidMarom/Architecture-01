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
                <h2>Axios -{`>`} Node.Js -{'>'} Mongo DB</h2>
                <p>This client app calls an API on <b>my own NodeJS server</b> which queries a Mongo database.</p>
                <p>Here is the response from the server:</p>
                
                { !booksLoading ?
                    books.map((book, i) => {
                        return (
                            <div key={i}>
                                {i}. {book.name}
                            </div>
                        )
                    }
                ) : 'Loading' }

            </Col>
        </PageContainer>
    )
}
