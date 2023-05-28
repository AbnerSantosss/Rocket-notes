import { useState } from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import {api} from '../../service/api'

import { useAuth  } from "../../hooks/auth";

import avatarPLacehouder from "../../assets/avatar.svg"

export function Profile() {

  const { user, updateProfile } = useAuth();



  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passworOld, setPassworOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPLacehouder;
  const [ avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passworOld
    }
    await updateProfile({user , avatarFile})
  }

  function handleChangeAvatar (event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Fotodo do Usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" 
            name="avatar" 
            id="avatar"
            onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e=>setName(e.target.value)}/>

        <Input placeholder="Email" type="text" icon={FiMail} value={email} onChange={e=>setEmail(e.target.value)}/>

        <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e=>setPassworOld(e.target.value)}/>

        <Input placeholder="Nova Senha" type="password" icon={FiLock} onChange={e=>setPasswordNew(e.target.value)}/>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
