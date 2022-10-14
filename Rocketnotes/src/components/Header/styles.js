import styled from 'styled-components'
//Nesse arquivo eu faço a estilização de tudo referente a esse compoente, inclusive outros componentes.

//=======CONTAINER======//
export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`

//==========PROFILE=======//
//esse componente está dentro do meu outro componete PAI o container
export const Profile = styled.div`
  display: flex;
  align-items: center;
  //a baixo eu uso o > para informar que entro do meu proffile queroa acesar a imagem//
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
//=========ICON=========//
export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 24px;
  }
`
