import React from 'react'
import { PageContainer } from './Storybook.styles'
import { useSelector } from 'react-redux'

const Storybook = () => {
    const isDark = useSelector(state => state.settings.dark)

    return (

        <PageContainer darkMode={isDark} >
            <h1>Storybook</h1>
            {/* <a href="https://6346c29f12cb3212588eb719-inmayifyhi.chromatic.com/?path=/story/welcome--home" target="_blank" rel="noreferrer">Link to my Storybook (UI design system)</a> */}
            <a href="https://6346c29f12cb3212588eb719-kgsdjqityn.chromatic.com/?path=/story/welcome--home" target="_blank" rel="noreferrer">Link to my Storybook (UI design system)</a>
        </PageContainer>
    )
}

export default Storybook