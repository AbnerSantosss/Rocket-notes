import { Container, Links, Content } from './styles' //Note que pegamos os ddois blocos estilizaodos do stylend

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    //o <links> ai é equivalente a o UL
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota!" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quod iusto voluptatibus, aspernatur laudantium culpa in eius et
            deserunt minus quos voluptates praesentium autem porro nihil, itaque
            animi fugit maiores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda, dignissimos numquam. A exercitationem
            odio itaque provident asperiores eveniet commodi quisquam, maiores
            labore beatae perspiciatis dolores recusandae architecto tenetur
            eligendi quas!
          </p>
          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">https://discord.com/channels/@me</a>{' '}
              </li>
              <li>
                <a href="#">https://www.youtube.com/</a>{' '}
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodeJS" />
          </Section>
          <Button title="voltar" />
        </Content>
      </main>
    </Container>
  )
}
