import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { useState } from "react";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles'
import { Link , useNavigate } from 'react-router-dom'


import {api} from '../../service/api'

export function SignUp() {
  const [name, setName ] = useState("")
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")
 
const navigate = useNavigate()

  function handleSingUp (){
     if(!name || !email || !password){
      return alert("Por favor, preencha todos os campos")
     }

     api.post('/users' , {name, email, password}).then(()=>{
      alert("Deu certo")
      navigate('/')
     }).catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('não foi possivel cadastrar')
      }
     })



    }


  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para Gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" 
        type="text" 
        icon={FiUser} 
        //Quando o usuário altera o valor do elemento, a função de callback setName é chamada e atualiza o estado do componente com o novo valor do elemento. Isso faz com que o componente seja re-renderizado e o novo valor seja exibido na interface do usuário.
        onChange={e => setName(e.target.value)}/>

        <Input placeholder="Email"
         type="text" 
         icon={FiMail}
         onChange={e => setEmail(e.target.value)} />

        <Input placeholder="Senha" 
        type="password" 
        icon={FiLock} 
        onChange={e => setPassword(e.target.value)}/>

        <Button title="Cadastrar" onClick= {handleSingUp}></Button>

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
