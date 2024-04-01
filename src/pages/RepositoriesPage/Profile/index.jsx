import React from 'react'

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

export default function Profile() {
    return (
        <Container>
            <Header>
                <Avatar src='https://avatars.githubusercontent.com/u/87608270?v=4' />
                <Login>PedroMarcelino7</Login>
                <Name>Pedro Paulo Marcelino</Name>
            </Header>

            <Inner>
                <Data>
                    <MdGroup size={20} /> 30<i>&nbsp;seguidores&nbsp;</i> &middot; 10 <i>&nbsp;seguindo</i>
                </Data>

                <Data>
                    <MdWork size={20} /> Dev Samurai
                </Data>

                <Data>
                    <MdLocationCity size={20} /> Lorena
                </Data>

                <Data>
                    <MdLink size={20} /> <a href="https://pedromarcelino7.github.io/Portfolio">portfólio</a>
                </Data>
            </Inner>
        </Container>
    )
}
