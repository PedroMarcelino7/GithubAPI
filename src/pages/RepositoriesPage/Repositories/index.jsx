import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'
import Repository from './Repository'

export default function Repositories({ repositories }) {
    return (
        <Container>
            <Repository />
            <Repository />
            <Repository />
            <Repository />
            <Repository />
            <Repository />
            <Repository />
            <Repository />
        </Container>
    )
}
