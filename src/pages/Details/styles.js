import styled from 'styled-components'
//Aqui é o arquivo de estilização  principal, é como se fosse minha div que dentro dela tem os outros componentes,
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content; //estou dizendo que o nome da minha area vai ser o content
    overflow-y: scroll; // Aqui estou ativando o scrool caso a tela seja maior que a viewport
    padding: 64px 0;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    //Aqui estou dizendo que quero pegar o primeiro filho que seja um botão
    align-self: end; //aqui estou diuzendo que quero um alinhamento nele mesmo!
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify; //o texto fica alinhado dois 2 lados
  }
`
