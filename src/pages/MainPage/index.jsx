import React, { useState } from "react"

import { MdSearch } from "react-icons/md"
import { Container, Logo, Title, Form, Input, Button } from "./styles"

import githubLogo from '../../assets/images/github-logo.svg'

export default function MainPage() {
  const [login, setLogin] = useState('PedroMarcelino7')

  return (
    <Container>
      <Logo src={githubLogo} alt="Github Logo" />
      <Title>API Github</Title>

      <Form>
        <Input
          placeholder="User"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <Button to={`/${login}/repositories`}>
          <MdSearch size={40} />
        </Button>
      </Form>
    </Container>
  )
}
