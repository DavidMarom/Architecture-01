import React from 'react'
import { PageContainer } from './Storybook.styles'
import { useSelector } from 'react-redux'

export const Storybook = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (

        <PageContainer darkMode={isDark} >
            <h1>Storybook</h1>
            <a href="https://6346c29f12cb3212588eb719-kysdmcdpcq.chromatic.com/?path=/story/card01--regular" target="_blank" rel="noreferrer">Link to my Storybook</a>
        </PageContainer>
    )
}
