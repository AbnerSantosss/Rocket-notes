import { Container } from './styles'
export function Input({ icon: Icon, ...rest }) {
  //netro do parametro eu não posso receber o icon com I maiuculo, então eu recebo com i menusculo e converto pra outro nome, que no caso é o nome do nosso compoente
  return (
    //o ...rest nesse caro vai me deixar livre para definir o tipo do impot na hora de ultilizar ex: pode ser do tipo email, number,text e por ai vaiu
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
    // Aqui estou dizendo, só mostre o compoente Icon com "i maiusculo de for passado a prorpiedade icon na chamada do compoente"
  )
}
