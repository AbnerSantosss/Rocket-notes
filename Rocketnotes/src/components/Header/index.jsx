import { RiShutDownLine } from 'react-icons/ri' // Importa o ícone RiShutDownLine do pacote react-icons/ri
import { Container, Profile, Logout } from './styles' // Importa os componentes Container, Profile e Logout do arquivo './styles'
import { useAuth } from "../../hooks/auth" // Importa o hook useAuth do diretório '../../hooks/auth'
import { api } from '../../service/api' // Importa a instância da API do diretório '../../service/api'

export function Header() { // Declaração de uma função de componente chamada Header
  
  const { signOut, user } = useAuth() // Destrutura o objeto retornado pelo hook useAuth, obtendo as funções signOut e o objeto user
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; // Define a variável avatarURL baseada no avatar do usuário, se existir, caso contrário, usa um avatarPlaceholder

  return ( // Renderização do componente
    <Container>   {/* // Renderiza o componente Container */}
      <Profile to="/profile">  {/* // Renderiza o componente Profile com um link para "/profile"*/}
        <img // Renderiza uma imagem
          src={avatarURL} // Define o atributo src da imagem com o valor de avatarURL
          alt={user.name} // Define o atributo alt da imagem com um texto descritivo
        />
        <div> 
          <span>Bem-vindo</span>  {/* // Renderiza um elemento span com o texto "Bem-vindo"*/}
          <strong>{user.name}</strong> 
        </div>
      </Profile>
      <Logout onClick={signOut}>   {/* // Renderiza o componente Logout com uma função de clique definida como signOut */}
        <RiShutDownLine/>  {/* // Renderiza o ícone RiShutDownLine */}
      </Logout>
    </Container>
  )
}
