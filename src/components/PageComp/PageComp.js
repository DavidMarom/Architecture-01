import React from 'react'
import { PageContainer } from './PageComp.styles'

// Components

// Redux
import { useDispatch, useSelector } from 'react-redux'

export default function PageComp() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.settings.dark)


    return (
        <PageContainer darkMode={isDark} >
        </PageContainer>
    )
}
