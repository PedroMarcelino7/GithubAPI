import React from 'react'

import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'

export default function RepositoriesPage() {
    const user = {
        login: 'PedroMarcelino7',
        name: 'Pedro Paulo Marcelino',
        avatar_url: 'https://avatars.githubusercontent.com/u/87608270?v=4',
        followers: 0,
        following: 0,
        company: null,
        blog: 'https://pedromarcelino7.github.io/Portfolio',
        location: 'Lorena',
    }

    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter />
            </Sidebar>

            <Main>
                <Repositories />
            </Main>
        </Container>
    )
}
