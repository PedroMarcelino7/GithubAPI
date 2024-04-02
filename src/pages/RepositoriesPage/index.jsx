import React, { useState } from 'react'

import { Container, Sidebar, Main } from './styles'
import { getLangsFrom } from '../../services/api'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'

export default function RepositoriesPage() {
    const [currentLanguage, setCurrentLanguage] = useState()

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

    const repositories = [
        {
            id: '1',
            name: 'Repository 1',
            description: 'Descrição',
            html_url: 'https://pedromarcelino7.github.io/Portfolio',
            language: 'JavaScript',
        },
        {
            id: '2',
            name: 'Repository 2',
            description: 'Descrição',
            html_url: 'https://pedromarcelino7.github.io/Pokedex',
            language: 'React',
        },
        {
            id: '3',
            name: 'Repository 3',
            description: 'Descrição',
            html_url: 'https://pedromarcelino7.github.io/MoviesAPI',
            language: 'JavaScript',
        },
        {
            id: '4',
            name: 'Repository 4',
            description: 'Descrição',
            html_url: 'https://pedromarcelino7-ebook-website.vercel.app/',
            language: 'HTML',
        },
        {
            id: '5',
            name: 'Repository 5',
            description: 'Descrição',
            html_url: 'https://pedromarcelino7.github.io/QRCodeGenerator',
            language: 'VUE',
        },
        {
            id: '6',
            name: 'Repository 6',
            description: 'Descrição',
            html_url: 'https://pedromarcelino7.github.io/BootstrapMiniChallenges',
            language: 'Bootstrap',
        },
    ]

    const languages = getLangsFrom(repositories)

    const onFilterClick = (language) => {
        setCurrentLanguage(language)
    }

    return (
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter
                    languages={languages}
                    currentLanguage={currentLanguage}
                    onClick={onFilterClick}
                />
            </Sidebar>

            <Main>
                <Repositories repositories={repositories} />
            </Main>
        </Container>
    )
}
