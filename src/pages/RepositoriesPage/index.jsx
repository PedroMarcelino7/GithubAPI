import React from 'react'

import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'

export default function RepositoriesPage() {
    return (
        <Container>
            <Sidebar>
                <Profile />
                <Filter />
            </Sidebar>

            <Main>
                <Repositories />
            </Main>
        </Container>
    )
}
