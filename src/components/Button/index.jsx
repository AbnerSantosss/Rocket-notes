import { Container } from './styles'

export function Button({ title, loading = false, ...rest }) {
  //Aqui estou dizendo no loading que mesmo se ele não for passado como propriedade ele vai ser false, no caso o valor padrão é false
  return (
    //estou usando o rest para dizer que tenho varias outras propriedades, mas não quero digitar todas!
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  )
}
