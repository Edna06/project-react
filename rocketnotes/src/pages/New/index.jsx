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

function handleAddLink() {
  setLinks(prevState => [...prevState, newLink])
  setNewLink("")
}

function handleRemoveLink(deleted) { 
 setLinks( prevState => [...prevState.filter(link => link !== deleted)])
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
            onClick={() => handleRemoveLink(link)}/> // estou passando um parâmetro para dentro do handleRemoveLink, por isso está em formato de arrow function
            // se não tiver isso, ele vai tentar executar de forma automática
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
          <NoteItem value='React'/>
          <NoteItem isNew placeholder='Nova tag'/>
          </div>
        </Section>

        <Button title='Salvar'/>
        </Form>
      </main>

    </Container>

  )
}