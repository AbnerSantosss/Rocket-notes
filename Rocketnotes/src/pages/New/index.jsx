import  {useState} from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'

import { Container, Form } from './styles'

import {api} from '../../service/api'

export function New() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [ links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")


  const [tags, setTags] = useState([])
  const [newTag, setNewTags] = useState("")

  const navigate = useNavigate()


  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTags("")
  }

  function handleRemoveTags (deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink (deleted){
   setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  async function handleNewNote (){
    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar mas não adicionou")
    }

    if(newLink){
      return alert("Você deixou um Link no campo para adicionar mas não adicionou")
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })


    alert("Nota Criada com Sucesso")
    navigate(-1);
  }


  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input 
          placeholder="Titulo" 
          onChange ={(e) => setTitle(e.target.value)}
          />

          <Textarea 
          placeholder="Observações" 
          onChange ={e => setDescription(e.target.value)}
          value={description}
          />
          <Section title="links ulteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
              tags.map((tag, index) => (

                <NoteItem 
                key={String(index)} 
                value={tag}
                onClick={() => handleRemoveTags(tag)}
                />

              ))}

              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTags(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick ={handleNewNote}/>
        </Form>
      </main>
    </Container>
  );
}
