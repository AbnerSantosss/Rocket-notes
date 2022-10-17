import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles' //todos os compoentes te que ser importados do style, para o estilo ser aplicado

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://avatars.githubusercontent.com/u/107922389?s=400&u=d3c34939c53eca72f562272447710d988834e90b&v=4"
          alt="imagem de perfil do usuario"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Abner Santos</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
