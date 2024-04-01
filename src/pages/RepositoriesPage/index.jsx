import React from 'react'

import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'

export default function RepositoriesPage() {
    return (
        <Container>
            <Sidebar>
                <Profile />
                <Filter />
            </Sidebar>

            <Main>
                Main
            </Main>
        </Container>
    )
}
