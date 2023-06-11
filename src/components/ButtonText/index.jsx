import { Container } from './styled'

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    // Aqui já estamos dizendo que o tipo vai ser botão, e usando o rest opoerator para poder lá no elementro principal, quando for ultilizar de fato esse compente podermos ultilizar qualquer parametro
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  )
}

//O isActive é uma condição que vamos ultilizar para colocar um filtro e saber se o filtro está ativo naquele elemento especifico ( no nosso caso botão) e lá quando estivermos ultilizando o compoente é que vamos fazer essa condição com um ternario
