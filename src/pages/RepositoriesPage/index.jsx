import React, { useEffect, useState } from 'react'

import { Loading, Container, Sidebar, Main } from './styles'
import { getUser, getRepos, getLangsFrom } from '../../services/api'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from './Repositories'

export default function RepositoriesPage() {
    const [user, setUser] = useState()
    const [repositories, setRepositories] = useState()
    const [languages, setLanguages] = useState()
    const [currentLanguage, setCurrentLanguage] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            const [userResponse, repositoriesResponse] = await Promise.all([
                getUser('PedroMarcelino7'),
                getRepos('PedroMarcelino7')
            ])

            setUser(userResponse.data)
            setRepositories(repositoriesResponse.data)
            setLanguages(getLangsFrom(repositoriesResponse.data))

            setLoading(false)
        }

        loadData()
    }, [])

    const onFilterClick = (language) => {
        setCurrentLanguage(language)
    }

    if (loading) {
        return <Loading>Carregando...</Loading>
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
