import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};

  border: ${({ theme, isNew }) =>
    isNew ? `1px groove ${theme.COLORS.GRAY_300}` : 'none'};

  //AQUI ESTOU USANDO O PARAMETRO isNew e se ele for
  //verdadeiro (ativado) eu quero que a cor trasparente seja colocada se não a background_900

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  //↓↓↓-Aqui estou dizendo que: Se for  novo eu quero a borda serrilhada se não eu não quero que tenha borda

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
