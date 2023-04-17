import {useState} from 'react'

import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


import {Textarea} from '../../components/Textarea/index'
import {NoteItem} from '../../components/NoteItem/index'
import {Section} from '../../components/Section/index'
import {Button} from '../../components/Button/index'
import {Header} from '../../components/Header/index'
import {Input} from '../../components/Input/index'

import {api} from '../../services/api'

import { Container, Form} from './styles'


export function New(){
  // para armazenar os estados que estamos criando
  const [title, setTitle] = useState("") //estado para título
  const [description, setDescription] = useState("") //estado para descrição
const [links, setLinks] = useState([])
const [newLink, setNewLink] = useState("")

const [tags, setTags] = useState([]) // [] -> indica que é uma coleção
const [newTag, setNewTag] = useState("")

const navigate = useNavigate()

function handleAddLink() {
  setLinks(prevState => [...prevState, newLink])
  setNewLink("")
}

function handleRemoveLink(linkDeleted) {
 setLinks( prevState => [...prevState.filter(link => link !== linkDeleted)])
}


function handleAddTag() {
  setTags( prevState => [...prevState, newTag])
  setNewTag('')
}

function handleRemoveTag(tagDeleted) {
  setTags( prevState => [...prevState.filter(tag => tag !== tagDeleted)])
}

async function handleNawNote() {

  await api.post('/notes', {
    title,
    description,
    tags,
    links
  })

  alert('Nota criada com sucesso!')
  navigate('/') //logo depois de cadastrar a nota, irá levar o usuário para tela inicial
}
  return (
    <Container>
      <Header/>

      <main>
        <Form>
        <header>
          <h1>Criar nota</h1>
          <Link to="/">Voltar</Link>
        </header>

        <Input
        placeholder='Titulo'
        onChange={e => setTitle(e.target.value)}/>

        <Textarea
        placeholder='Observações'
        onChange= {e => setDescription(e.target.value)}/>

        <Section title="Links úteis">

          {
            links.map((link, index) => ( // index -> a posição
            <NoteItem
            key={String(index)}
            value={link}
            onClick={() => handleRemoveLink(link)}/>
            ))
          }

          <NoteItem
          isNew
          placeholder="Novo link"
          value={newLink}
          onChange={ e => setNewLink(e.target.value)}
          onClick={handleAddLink}/>
        </Section>


        <Section title="Marcadores">
          <div className="tags">

          {
          tags.map((tag, index) => (
          <NoteItem
            key={String(index)}
            value={tag}
            onClick={() => handleRemoveTag(tag)}
            />
            ))
          }

          <NoteItem
          isNew
          placeholder='Nova tag'
          value={newTag}
          onChange={e => setNewTag(e.target.value)}
          onClick={handleAddTag}/>
          </div>
        </Section>

        <Button title='Salvar'
        onClick={handleNawNote}/>
        </Form>
      </main>

    </Container>

  )
}