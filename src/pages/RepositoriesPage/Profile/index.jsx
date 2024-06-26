import React from 'react'

import PropTypes from 'prop-types'

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'


export default function Profile({ user }) {
    return (
        <Container>
            <Header>
                <Avatar src={user.avatar_url} />
                <Login>{user.login}</Login>
                <Name>{user.name}</Name>
            </Header>

            <Inner>
                <Data>
                    <MdGroup size={20} /> {user.followers}<i>&nbsp;seguidores&nbsp;</i> &middot; {user.following} <i>&nbsp;seguindo</i>
                </Data>

                {user.company &&
                    <Data Data >
                        <MdWork size={20} /> {user.company}
                    </Data>
                }

                {user.location &&
                    <Data>
                        <MdLocationCity size={20} /> {user.location}
                    </Data>
                }

                {user.blog &&
                    <Data>
                        <MdLink size={20} /> <a href={`\\${user.blog}`}>Blog</a>
                    </Data>
                }
            </Inner>
        </Container >
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        company: PropTypes.string,
        blog: PropTypes.string,
        location: PropTypes.string,
    }).isRequired
}
