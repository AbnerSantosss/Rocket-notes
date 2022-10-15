import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://avatars.githubusercontent.com/u/107922389?s=400&u=d3c34939c53eca72f562272447710d988834e90b&v=4"
            alt="Fotodo do Usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="text" name="" id="" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
