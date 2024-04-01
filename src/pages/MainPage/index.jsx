import React from "react"

import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles"

import githubLogo from '../../assets/images/github-logo.svg'

export default function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="Github Logo" />
      <Title>API Github</Title>

      <Form>
        <Input placeholder="User" />

        <Button>
          <MdSearch size={35} />
        </Button>
      </Form>
    </Container>
  )
}
