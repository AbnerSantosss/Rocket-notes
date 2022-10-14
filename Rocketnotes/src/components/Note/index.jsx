import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {
            // tag.id é uma forma de de dizer que aquele elemento é unico
            data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name} />
            ))
          }
        </footer>
      )}
    </Container>
  )
}
