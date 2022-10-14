import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box; // para evitar quando colocar um paddin interno não influencie no tamanho total do elemento!
}


  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    -webkit-font-smoothing: antialiased; // paradeixar a fonte mais suave
  }


    body, input, button , textarea{
   font-family: 'Roboto Slab', serif;
   font-size: 16px;
   outline: none; //remover qualquer linha que apareça
  }

  
  button{
    cursor: pointer;
    transition: 0.2s;

    &:hover{
      opacity: 0.7;
      
    }
  }
  
  
  a{
    text-decoration: none;
  }

  `
