import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: 'React',
              tags: [
                { id: '1', name: 'React' },
                { id: '2', name: 'Rocketseat' }
              ]
            }}
          />
        </Section>
      </Content>
      <NewNote to="/New">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
