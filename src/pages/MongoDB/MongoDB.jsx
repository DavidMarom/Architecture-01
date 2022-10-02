import React from 'react'
import { useSelector } from 'react-redux'
import { Col, PageContainer } from './MongoDB.styles'
import { Link } from "react-router-dom";

export const MongoDB = () => {
    const books = useSelector(state => state.books.books)
    const isDark = useSelector(state => state.settings.dark)
    console.log(333, books)
    return (
        <PageContainer darkMode={isDark} >
            <Col>
                <h1>Hi</h1>
                <p>This client app calls an API on my own NodeJS server which queries a Mongo database. Here are the results (WIP)</p>
                
                { books ?
                    books.map((book, i) => {
                        return (
                            <div key={i}>
                                {book.name}
                            </div>
                        )
                    }
                ) : 'aaaa' }

            </Col>
        </PageContainer>
    )
}
