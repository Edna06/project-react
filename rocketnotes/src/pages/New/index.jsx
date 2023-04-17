import {useState} from 'react'

import {Link} from 'react-router-dom'

import {Textarea} from '../../components/Textarea/index'
import {NoteItem} from '../../components/NoteItem/index'
import {Section} from '../../components/Section/index'
import {Button} from '../../components/Button/index'
import {Header} from '../../components/Header/index'
import {Input} from '../../components/Input/index'

import { Container, Form} from './styles'


export function New(){
// para armazenar os estados que estamos criando
const [links, setLinks] = useState([])
const [newLink, setNewLink] = useState("")

const [tags, setTags] = useState([]) // [] -> indica que é uma coleção
const [newTag, setNewTag] = useState("")

function handleAddLink() {
  setLinks(prevState => [...prevState, newLink])
  setNewLink("")
}

function handleRemoveLink(deleted) {
 setLinks( prevState => [...prevState.filter(link => link !== deleted)])
}


function handleAddTag() {
  setTags( prevState => [...prevState, newTag])
  setNewTag('')
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

        <Input placeholder='Titulo'/>
        <Textarea placeholder='Observações '/>

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
            // onClick={}
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

        <Button title='Salvar'/>
        </Form>
      </main>

    </Container>

  )
}